package = "voxgig-sdk-emojihub"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/emojihub-sdk.git"
}
description = {
  summary = "Emojihub SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["emojihub_sdk"] = "emojihub_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
