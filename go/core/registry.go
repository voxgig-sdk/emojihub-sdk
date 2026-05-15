package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAllEntityFunc func(client *EmojihubSDK, entopts map[string]any) EmojihubEntity

var NewCategoryEntityFunc func(client *EmojihubSDK, entopts map[string]any) EmojihubEntity

var NewGroupEntityFunc func(client *EmojihubSDK, entopts map[string]any) EmojihubEntity

var NewRandomEntityFunc func(client *EmojihubSDK, entopts map[string]any) EmojihubEntity

var NewSearchEntityFunc func(client *EmojihubSDK, entopts map[string]any) EmojihubEntity

var NewSimilarEntityFunc func(client *EmojihubSDK, entopts map[string]any) EmojihubEntity

