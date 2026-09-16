-- Emojihub SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Emojihub",
      slug = "emojihub",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://emojihub.yurace.pro/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["all"] = {},
        ["category"] = {},
        ["group"] = {},
        ["random"] = {},
        ["search"] = {},
        ["similar"] = {},
      },
    },
    entity = {
      ["all"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "The category the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "group",
            ["req"] = true,
            ["short"] = "The group the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "htmlCode",
            ["req"] = true,
            ["short"] = "Array of HTML entity codes for the emoji",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "The name of the emoji",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unicode",
            ["req"] = true,
            ["short"] = "Array of Unicode code points for the emoji",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "all",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/all",
                ["segments"] = {
                  {
                    ["lit"] = "all",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "all",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["category"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "The category the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "group",
            ["req"] = true,
            ["short"] = "The group the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "htmlCode",
            ["req"] = true,
            ["short"] = "Array of HTML entity codes for the emoji",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "The name of the emoji",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unicode",
            ["req"] = true,
            ["short"] = "Array of Unicode code points for the emoji",
            ["type"] = "`$ARRAY`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "category",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/categories",
                ["segments"] = {
                  {
                    ["lit"] = "categories",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "categories",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "category_name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/all/category/{category-name}",
                ["rename"] = {
                  ["param"] = {
                    ["category-name"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "all",
                  },
                  {
                    ["lit"] = "category",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "all",
                  "category",
                  "{id}",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "category_name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random/category/{category-name}",
                ["rename"] = {
                  ["param"] = {
                    ["category-name"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "random",
                  },
                  {
                    ["lit"] = "category",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "random",
                  "category",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["group"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "The category the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "group",
            ["req"] = true,
            ["short"] = "The group the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "htmlCode",
            ["req"] = true,
            ["short"] = "Array of HTML entity codes for the emoji",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "The name of the emoji",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unicode",
            ["req"] = true,
            ["short"] = "Array of Unicode code points for the emoji",
            ["type"] = "`$ARRAY`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "group",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/groups",
                ["segments"] = {
                  {
                    ["lit"] = "groups",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "groups",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "group_name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/all/group/{group-name}",
                ["rename"] = {
                  ["param"] = {
                    ["group-name"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "all",
                  },
                  {
                    ["lit"] = "group",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "all",
                  "group",
                  "{id}",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "group_name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random/group/{group-name}",
                ["rename"] = {
                  ["param"] = {
                    ["group-name"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "random",
                  },
                  {
                    ["lit"] = "group",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "random",
                  "group",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["random"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "The category the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "group",
            ["req"] = true,
            ["short"] = "The group the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "htmlCode",
            ["req"] = true,
            ["short"] = "Array of HTML entity codes for the emoji",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "The name of the emoji",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unicode",
            ["req"] = true,
            ["short"] = "Array of Unicode code points for the emoji",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "random",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/random",
                ["segments"] = {
                  {
                    ["lit"] = "random",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "random",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "The category the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "group",
            ["req"] = true,
            ["short"] = "The group the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "htmlCode",
            ["req"] = true,
            ["short"] = "Array of HTML entity codes for the emoji",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "The name of the emoji",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unicode",
            ["req"] = true,
            ["short"] = "Array of Unicode code points for the emoji",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "smile",
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search",
                ["segments"] = {
                  {
                    ["lit"] = "search",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "q",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "search",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["similar"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "The category the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "group",
            ["req"] = true,
            ["short"] = "The group the emoji belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "htmlCode",
            ["req"] = true,
            ["short"] = "Array of HTML entity codes for the emoji",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "The name of the emoji",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unicode",
            ["req"] = true,
            ["short"] = "Array of Unicode code points for the emoji",
            ["type"] = "`$ARRAY`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "similar",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "cat",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/similar/{name}",
                ["rename"] = {
                  ["param"] = {
                    ["name"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "similar",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "similar",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
