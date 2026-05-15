package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/emojihub-sdk"
	"github.com/voxgig-sdk/emojihub-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestGroupEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Group(nil)
		if ent == nil {
			t.Fatal("expected non-nil GroupEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := groupBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "group." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set EMOJIHUB_TEST_GROUP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		groupRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.group", setup.data)))
		var groupRef01Data map[string]any
		if len(groupRef01DataRaw) > 0 {
			groupRef01Data = core.ToMapAny(groupRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = groupRef01Data

		// LIST
		groupRef01Ent := client.Group(nil)
		groupRef01Match := map[string]any{}

		groupRef01ListResult, err := groupRef01Ent.List(groupRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, groupRef01ListOk := groupRef01ListResult.([]any)
		if !groupRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", groupRef01ListResult)
		}

		// LOAD
		groupRef01MatchDt0 := map[string]any{}
		groupRef01DataDt0Loaded, err := groupRef01Ent.Load(groupRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if groupRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func groupBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "group", "GroupTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read group test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse group test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"group01", "group02", "group03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("EMOJIHUB_TEST_GROUP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"EMOJIHUB_TEST_GROUP_ENTID": idmap,
		"EMOJIHUB_TEST_LIVE":      "FALSE",
		"EMOJIHUB_TEST_EXPLAIN":   "FALSE",
		"EMOJIHUB_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["EMOJIHUB_TEST_GROUP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["EMOJIHUB_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["EMOJIHUB_APIKEY"],
			},
			extra,
		})
		client = sdk.NewEmojihubSDK(core.ToMapAny(mergedOpts))
	}

	live := env["EMOJIHUB_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["EMOJIHUB_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
