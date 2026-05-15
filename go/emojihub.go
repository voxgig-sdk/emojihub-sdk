package voxgigemojihubsdk

import (
	"github.com/voxgig-sdk/emojihub-sdk/core"
	"github.com/voxgig-sdk/emojihub-sdk/entity"
	"github.com/voxgig-sdk/emojihub-sdk/feature"
	_ "github.com/voxgig-sdk/emojihub-sdk/utility"
)

// Type aliases preserve external API.
type EmojihubSDK = core.EmojihubSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type EmojihubEntity = core.EmojihubEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type EmojihubError = core.EmojihubError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAllEntityFunc = func(client *core.EmojihubSDK, entopts map[string]any) core.EmojihubEntity {
		return entity.NewAllEntity(client, entopts)
	}
	core.NewCategoryEntityFunc = func(client *core.EmojihubSDK, entopts map[string]any) core.EmojihubEntity {
		return entity.NewCategoryEntity(client, entopts)
	}
	core.NewGroupEntityFunc = func(client *core.EmojihubSDK, entopts map[string]any) core.EmojihubEntity {
		return entity.NewGroupEntity(client, entopts)
	}
	core.NewRandomEntityFunc = func(client *core.EmojihubSDK, entopts map[string]any) core.EmojihubEntity {
		return entity.NewRandomEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.EmojihubSDK, entopts map[string]any) core.EmojihubEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewSimilarEntityFunc = func(client *core.EmojihubSDK, entopts map[string]any) core.EmojihubEntity {
		return entity.NewSimilarEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewEmojihubSDK = core.NewEmojihubSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
