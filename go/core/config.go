package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Emojihub",
			"slug": "emojihub",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://emojihub.yurace.pro/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"all": map[string]any{},
				"category": map[string]any{},
				"group": map[string]any{},
				"random": map[string]any{},
				"search": map[string]any{},
				"similar": map[string]any{},
			},
		},
		"entity": map[string]any{
			"all": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "The category the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group",
						"req": true,
						"short": "The group the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "htmlCode",
						"req": true,
						"short": "Array of HTML entity codes for the emoji",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the emoji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unicode",
						"req": true,
						"short": "Array of Unicode code points for the emoji",
						"type": "`$ARRAY`",
					},
				},
				"name": "all",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/all",
								"segments": []any{
									map[string]any{
										"lit": "all",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"all",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"category": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "The category the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group",
						"req": true,
						"short": "The group the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "htmlCode",
						"req": true,
						"short": "Array of HTML entity codes for the emoji",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the emoji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unicode",
						"req": true,
						"short": "Array of Unicode code points for the emoji",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "category",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/categories",
								"segments": []any{
									map[string]any{
										"lit": "categories",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"categories",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "category_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/all/category/{category-name}",
								"rename": map[string]any{
									"param": map[string]any{
										"category-name": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "all",
									},
									map[string]any{
										"lit": "category",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"all",
									"category",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "category_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/random/category/{category-name}",
								"rename": map[string]any{
									"param": map[string]any{
										"category-name": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "category",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"random",
									"category",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "The category the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group",
						"req": true,
						"short": "The group the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "htmlCode",
						"req": true,
						"short": "Array of HTML entity codes for the emoji",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the emoji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unicode",
						"req": true,
						"short": "Array of Unicode code points for the emoji",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/groups",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"groups",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "group_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/all/group/{group-name}",
								"rename": map[string]any{
									"param": map[string]any{
										"group-name": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "all",
									},
									map[string]any{
										"lit": "group",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"all",
									"group",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "group_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/random/group/{group-name}",
								"rename": map[string]any{
									"param": map[string]any{
										"group-name": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "group",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"random",
									"group",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"random": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "The category the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group",
						"req": true,
						"short": "The group the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "htmlCode",
						"req": true,
						"short": "Array of HTML entity codes for the emoji",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the emoji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unicode",
						"req": true,
						"short": "Array of Unicode code points for the emoji",
						"type": "`$ARRAY`",
					},
				},
				"name": "random",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random",
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"random",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "The category the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group",
						"req": true,
						"short": "The group the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "htmlCode",
						"req": true,
						"short": "Array of HTML entity codes for the emoji",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the emoji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unicode",
						"req": true,
						"short": "Array of Unicode code points for the emoji",
						"type": "`$ARRAY`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "smile",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"q",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"similar": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "The category the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group",
						"req": true,
						"short": "The group the emoji belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "htmlCode",
						"req": true,
						"short": "Array of HTML entity codes for the emoji",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the emoji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unicode",
						"req": true,
						"short": "Array of Unicode code points for the emoji",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "similar",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "cat",
											"kind": "param",
											"name": "id",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/similar/{name}",
								"rename": map[string]any{
									"param": map[string]any{
										"name": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "similar",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"similar",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
