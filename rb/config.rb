# Emojihub SDK configuration

module EmojihubConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Emojihub",
        "slug" => "emojihub",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://emojihub.yurace.pro/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "all" => {},
          "category" => {},
          "group" => {},
          "random" => {},
          "search" => {},
          "similar" => {},
        },
      },
      "entity" => {
        "all" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "short" => "The category the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "group",
              "req" => true,
              "short" => "The group the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "htmlCode",
              "req" => true,
              "short" => "Array of HTML entity codes for the emoji",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "The name of the emoji",
              "type" => "`$STRING`",
            },
            {
              "name" => "unicode",
              "req" => true,
              "short" => "Array of Unicode code points for the emoji",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "all",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/all",
                  "parts" => [
                    "all",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "category" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "short" => "The category the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "group",
              "req" => true,
              "short" => "The group the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "htmlCode",
              "req" => true,
              "short" => "Array of HTML entity codes for the emoji",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "The name of the emoji",
              "type" => "`$STRING`",
            },
            {
              "name" => "unicode",
              "req" => true,
              "short" => "Array of Unicode code points for the emoji",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "category",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/categories",
                  "parts" => [
                    "categories",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "category_name",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/all/category/{category-name}",
                  "parts" => [
                    "all",
                    "category",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "category-name" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "category_name",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random/category/{category-name}",
                  "parts" => [
                    "random",
                    "category",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "category-name" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "group" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "short" => "The category the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "group",
              "req" => true,
              "short" => "The group the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "htmlCode",
              "req" => true,
              "short" => "Array of HTML entity codes for the emoji",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "The name of the emoji",
              "type" => "`$STRING`",
            },
            {
              "name" => "unicode",
              "req" => true,
              "short" => "Array of Unicode code points for the emoji",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "group",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/groups",
                  "parts" => [
                    "groups",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "group_name",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/all/group/{group-name}",
                  "parts" => [
                    "all",
                    "group",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "group-name" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "group_name",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random/group/{group-name}",
                  "parts" => [
                    "random",
                    "group",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "group-name" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "random" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "short" => "The category the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "group",
              "req" => true,
              "short" => "The group the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "htmlCode",
              "req" => true,
              "short" => "Array of HTML entity codes for the emoji",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "The name of the emoji",
              "type" => "`$STRING`",
            },
            {
              "name" => "unicode",
              "req" => true,
              "short" => "Array of Unicode code points for the emoji",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "random",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random",
                  "parts" => [
                    "random",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "short" => "The category the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "group",
              "req" => true,
              "short" => "The group the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "htmlCode",
              "req" => true,
              "short" => "Array of HTML entity codes for the emoji",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "The name of the emoji",
              "type" => "`$STRING`",
            },
            {
              "name" => "unicode",
              "req" => true,
              "short" => "Array of Unicode code points for the emoji",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "smile",
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/search",
                  "parts" => [
                    "search",
                  ],
                  "select" => {
                    "exist" => [
                      "q",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "similar" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "short" => "The category the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "group",
              "req" => true,
              "short" => "The group the emoji belongs to",
              "type" => "`$STRING`",
            },
            {
              "name" => "htmlCode",
              "req" => true,
              "short" => "Array of HTML entity codes for the emoji",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "The name of the emoji",
              "type" => "`$STRING`",
            },
            {
              "name" => "unicode",
              "req" => true,
              "short" => "Array of Unicode code points for the emoji",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "similar",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "cat",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "name",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/similar/{name}",
                  "parts" => [
                    "similar",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "name" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    EmojihubFeatures.make_feature(name)
  end
end
