# Emojihub SDK

Fetch random emojis or browse the full emoji database by category or group

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About EmojiHub

[EmojiHub](https://emojihub.yurace.pro) is a small, free HTTP API that serves a curated database of emojis with their names, HTML codes, and Unicode values. It is maintained as an open-source project by [cheatsnake](https://github.com/cheatsnake) on GitHub.

What you get from the API:

- A random emoji from the full set or from a chosen category/group
- The complete emoji database (~1,791 entries) as JSON
- Filtering by category (smileys-and-people, animals-and-nature, food-and-drink, travel-and-places, activities, objects, symbols, flags)
- Filtering by finer-grained groups (face-positive, cat-face, body, clothing, animal-bird, food-fruit, and others)
- Each entry contains `name`, `category`, `group`, an `htmlCode` array, and a `unicode` array suitable for dropping into HTML or other text

The API requires no authentication and no API key. Note that CORS is disabled on all endpoints, so browser-side calls typically need a proxy. Responses are plain JSON returned over HTTPS.

## Try it

**TypeScript**
```bash
npm install emojihub
```

**Python**
```bash
pip install emojihub-sdk
```

**PHP**
```bash
composer require voxgig/emojihub-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/emojihub-sdk/go
```

**Ruby**
```bash
gem install emojihub-sdk
```

**Lua**
```bash
luarocks install emojihub-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { EmojihubSDK } from 'emojihub'

const client = new EmojihubSDK({})

// List all alls
const alls = await client.All().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o emojihub-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "emojihub": {
      "command": "/abs/path/to/emojihub-mcp"
    }
  }
}
```

## Entities

The API exposes 6 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **All** | The full emoji dataset, served from `/api/all` and filterable via `/api/all/category/{name}` or `/api/all/group/{name}`. | `/all` |
| **Category** | High-level emoji categories such as smileys-and-people, animals-and-nature, food-and-drink, travel-and-places, activities, objects, symbols, and flags, accessed via `/api/all/category/{name}` or `/api/random/category/{name}`. | `/categories` |
| **Group** | Finer-grained groupings within categories (for example face-positive, cat-face, animal-bird, food-fruit), accessed via `/api/all/group/{name}` or `/api/random/group/{name}`. | `/groups` |
| **Random** | A single random emoji object, served from `/api/random`, with optional category/group scoping via `/api/random/category/{name}` and `/api/random/group/{name}`. | `/random` |
| **Search** | Lookup of emojis by name or keyword. | `/search` |
| **Similar** | Emojis related to a given emoji name, useful for suggesting alternatives. | `/similar/{name}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from emojihub_sdk import EmojihubSDK

client = EmojihubSDK({})

# List all alls
alls, err = client.All(None).list(None, None)
```

### PHP

```php
<?php
require_once 'emojihub_sdk.php';

$client = new EmojihubSDK([]);

// List all alls
[$alls, $err] = $client->All(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/emojihub-sdk/go"

client := sdk.NewEmojihubSDK(map[string]any{})

// List all alls
alls, err := client.All(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Emojihub_sdk"

client = EmojihubSDK.new({})

# List all alls
alls, err = client.All(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("emojihub_sdk")

local client = sdk.new({})

-- List all alls
local alls, err = client:All(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = EmojihubSDK.test()
const result = await client.All().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = EmojihubSDK.test(None, None)
result, err = client.All(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = EmojihubSDK::test(null, null);
[$result, $err] = $client->All(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.All(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = EmojihubSDK.test(nil, nil)
result, err = client.All(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:All(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the EmojiHub

- Upstream: [https://emojihub.yurace.pro](https://emojihub.yurace.pro)
- API docs: [https://github.com/cheatsnake/emojihub](https://github.com/cheatsnake/emojihub)

- Licensed under the MIT License.
- Source and documentation are maintained on [GitHub](https://github.com/cheatsnake/emojihub) by [cheatsnake](https://github.com/cheatsnake).
- Attribution is appreciated when redistributing the emoji dataset.

---

Generated from the EmojiHub OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
