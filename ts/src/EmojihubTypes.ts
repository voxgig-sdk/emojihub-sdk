// Typed models for the Emojihub SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface All {
  category: string
  group: string
  html_code: any[]
  name: string
  unicode: any[]
}

export type AllListMatch = Partial<All>

export interface Category {
  category: string
  group: string
  html_code: any[]
  name: string
  unicode: any[]
}

export interface CategoryLoadMatch {
  id: string
}

export type CategoryListMatch = Partial<Category>

export interface Group {
  category: string
  group: string
  html_code: any[]
  name: string
  unicode: any[]
}

export interface GroupLoadMatch {
  id: string
}

export type GroupListMatch = Partial<Group>

export interface Random {
  category: string
  group: string
  html_code: any[]
  name: string
  unicode: any[]
}

export type RandomListMatch = Partial<Random>

export interface Search {
  category: string
  group: string
  html_code: any[]
  name: string
  unicode: any[]
}

export type SearchListMatch = Partial<Search>

export interface Similar {
  category: string
  group: string
  html_code: any[]
  name: string
  unicode: any[]
}

export interface SimilarLoadMatch {
  id: string
}

