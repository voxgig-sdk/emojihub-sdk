-- Typed models for the Emojihub SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class All
---@field category string
---@field group string
---@field html_code table
---@field name string
---@field unicode table

---@class AllListMatch

---@class Category
---@field category string
---@field group string
---@field html_code table
---@field name string
---@field unicode table

---@class CategoryLoadMatch
---@field id string

---@class CategoryListMatch

---@class Group
---@field category string
---@field group string
---@field html_code table
---@field name string
---@field unicode table

---@class GroupLoadMatch
---@field id string

---@class GroupListMatch

---@class Random
---@field category string
---@field group string
---@field html_code table
---@field name string
---@field unicode table

---@class RandomListMatch

---@class Search
---@field category string
---@field group string
---@field html_code table
---@field name string
---@field unicode table

---@class SearchListMatch

---@class Similar
---@field category string
---@field group string
---@field html_code table
---@field name string
---@field unicode table

---@class SimilarLoadMatch
---@field id string

local M = {}

return M
