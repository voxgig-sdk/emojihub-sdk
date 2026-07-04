# frozen_string_literal: true

# Typed models for the Emojihub SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# All entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] group
#   @return [String]
#
# @!attribute [rw] html_code
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] unicode
#   @return [Array]
All = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Match filter for All#list (any subset of All fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] html_code
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] unicode
#   @return [Array, nil]
AllListMatch = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Category entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] group
#   @return [String]
#
# @!attribute [rw] html_code
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] unicode
#   @return [Array]
Category = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Request payload for Category#load.
#
# @!attribute [rw] id
#   @return [String]
CategoryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Category#list (any subset of Category fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] html_code
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] unicode
#   @return [Array, nil]
CategoryListMatch = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Group entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] group
#   @return [String]
#
# @!attribute [rw] html_code
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] unicode
#   @return [Array]
Group = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Request payload for Group#load.
#
# @!attribute [rw] id
#   @return [String]
GroupLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Group#list (any subset of Group fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] html_code
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] unicode
#   @return [Array, nil]
GroupListMatch = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Random entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] group
#   @return [String]
#
# @!attribute [rw] html_code
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] unicode
#   @return [Array]
Random = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Match filter for Random#list (any subset of Random fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] html_code
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] unicode
#   @return [Array, nil]
RandomListMatch = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] group
#   @return [String]
#
# @!attribute [rw] html_code
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] unicode
#   @return [Array]
Search = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Match filter for Search#list (any subset of Search fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] html_code
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] unicode
#   @return [Array, nil]
SearchListMatch = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Similar entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] group
#   @return [String]
#
# @!attribute [rw] html_code
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] unicode
#   @return [Array]
Similar = Struct.new(
  :category,
  :group,
  :html_code,
  :name,
  :unicode,
  keyword_init: true
)

# Request payload for Similar#load.
#
# @!attribute [rw] id
#   @return [String]
SimilarLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

