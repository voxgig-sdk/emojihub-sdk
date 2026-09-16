"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GroupEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when EMOJIHUB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('EMOJIHUB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.EmojihubSDK.test();
        const ent = testsdk.Group();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.EMOJIHUB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'group.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "category", "req": true, "short": "The category the emoji belongs to", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "group", "req": true, "short": "The group the emoji belongs to", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "htmlCode", "req": true, "short": "Array of HTML entity codes for the emoji", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": true, "short": "The name of the emoji", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "unicode", "req": true, "short": "Array of Unicode code points for the emoji", "type": "`$ARRAY`", "index$": 5 }], "id": { "field": "id", "name": "id" }, "name": "group", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /groups", "json": "{\"operationId\":\"getGroups\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[\"face positive\",\"face neutral\",\"face negative\",\"face role\",\"face sick\",\"creature face\"],\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/groups", "segments": [{ "lit": "groups" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "group_name", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /all/group/{group-name}", "json": "{\"operationId\":\"getAllEmojisByGroup\",\"parameters\":[{\"description\":\"The group name (e.g., 'face-positive', 'animal-bird')\",\"in\":\"path\",\"name\":\"group-name\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"category\":{\"description\":\"The category the emoji belongs to\",\"example\":\"smileys and people\",\"type\":\"string\"},\"group\":{\"description\":\"The group the emoji belongs to\",\"example\":\"face positive\",\"type\":\"string\"},\"htmlCode\":{\"description\":\"Array of HTML entity codes for the emoji\",\"example\":[\"&#129303;\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the emoji\",\"example\":\"hugging face\",\"type\":\"string\"},\"unicode\":{\"description\":\"Array of Unicode code points for the emoji\",\"example\":[\"U+1F917\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"name\",\"category\",\"group\",\"htmlCode\",\"unicode\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Group not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/all/group/{group-name}", "rename": { "param": { "group-name": "id" } }, "segments": [{ "lit": "all" }, { "lit": "group" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "group_name", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /random/group/{group-name}", "json": "{\"operationId\":\"getRandomEmojiByGroup\",\"parameters\":[{\"description\":\"The group name (e.g., 'face-positive', 'animal-bird')\",\"in\":\"path\",\"name\":\"group-name\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"category\":{\"description\":\"The category the emoji belongs to\",\"example\":\"smileys and people\",\"type\":\"string\"},\"group\":{\"description\":\"The group the emoji belongs to\",\"example\":\"face positive\",\"type\":\"string\"},\"htmlCode\":{\"description\":\"Array of HTML entity codes for the emoji\",\"example\":[\"&#129303;\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the emoji\",\"example\":\"hugging face\",\"type\":\"string\"},\"unicode\":{\"description\":\"Array of Unicode code points for the emoji\",\"example\":[\"U+1F917\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"name\",\"category\",\"group\",\"htmlCode\",\"unicode\"],\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Group not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/random/group/{group-name}", "rename": { "param": { "group-name": "id" } }, "segments": [{ "lit": "random" }, { "lit": "group" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "group", "name__orig": "group", "Name": "Group", "name_": "group", "name-": "group", "NAME": "GROUP", "index$": 2 }, { "active": true, "entity": "group", "key$": "BasicGroupFlow", "kind": "basic", "name": "BasicGroupFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "group_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "group_ref01", "srcdatavar": "group_ref01_data", "suffix": "_dt0" }, "match": { "id": "group01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-group_ref01" } }], "index$": 1 }] }, 'Group');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let group_ref01_data = Object.values(setup.data.existing.group)[0];
        // LIST
        const group_ref01_ent = client.Group();
        const group_ref01_match = {};
        const group_ref01_list = (await group_ref01_ent.list(group_ref01_match)).map((e) => e.data());
        // LOAD
        const group_ref01_match_dt0 = {};
        group_ref01_match_dt0.id = group_ref01_data.id;
        const group_ref01_data_dt0 = (await group_ref01_ent.load(group_ref01_match_dt0)).data();
        (0, node_assert_1.default)(group_ref01_data_dt0.id === group_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/group/GroupTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.EmojihubSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['group01', 'group02', 'group03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'EMOJIHUB_TEST_GROUP_ENTID': idmap,
        'EMOJIHUB_TEST_LIVE': 'FALSE',
        'EMOJIHUB_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['EMOJIHUB_TEST_GROUP_ENTID'];
    const live = 'TRUE' === env.EMOJIHUB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['EMOJIHUB_TEST_GROUP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.EmojihubSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.EMOJIHUB_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GroupEntity.test.js.map