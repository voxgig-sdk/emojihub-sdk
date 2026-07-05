// Typed models for the Emojihub SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// All is the typed data model for the all entity.
type All struct {
	Category string `json:"category"`
	Group string `json:"group"`
	HtmlCode []any `json:"html_code"`
	Name string `json:"name"`
	Unicode []any `json:"unicode"`
}

// AllListMatch is the typed request payload for All.ListTyped.
type AllListMatch struct {
	Category *string `json:"category,omitempty"`
	Group *string `json:"group,omitempty"`
	HtmlCode *[]any `json:"html_code,omitempty"`
	Name *string `json:"name,omitempty"`
	Unicode *[]any `json:"unicode,omitempty"`
}

// Category is the typed data model for the category entity.
type Category struct {
	Category string `json:"category"`
	Group string `json:"group"`
	HtmlCode []any `json:"html_code"`
	Name string `json:"name"`
	Unicode []any `json:"unicode"`
}

// CategoryLoadMatch is the typed request payload for Category.LoadTyped.
type CategoryLoadMatch struct {
	Id string `json:"id"`
}

// CategoryListMatch is the typed request payload for Category.ListTyped.
type CategoryListMatch struct {
	Category *string `json:"category,omitempty"`
	Group *string `json:"group,omitempty"`
	HtmlCode *[]any `json:"html_code,omitempty"`
	Name *string `json:"name,omitempty"`
	Unicode *[]any `json:"unicode,omitempty"`
}

// Group is the typed data model for the group entity.
type Group struct {
	Category string `json:"category"`
	Group string `json:"group"`
	HtmlCode []any `json:"html_code"`
	Name string `json:"name"`
	Unicode []any `json:"unicode"`
}

// GroupLoadMatch is the typed request payload for Group.LoadTyped.
type GroupLoadMatch struct {
	Id string `json:"id"`
}

// GroupListMatch is the typed request payload for Group.ListTyped.
type GroupListMatch struct {
	Category *string `json:"category,omitempty"`
	Group *string `json:"group,omitempty"`
	HtmlCode *[]any `json:"html_code,omitempty"`
	Name *string `json:"name,omitempty"`
	Unicode *[]any `json:"unicode,omitempty"`
}

// Random is the typed data model for the random entity.
type Random struct {
	Category string `json:"category"`
	Group string `json:"group"`
	HtmlCode []any `json:"html_code"`
	Name string `json:"name"`
	Unicode []any `json:"unicode"`
}

// RandomListMatch is the typed request payload for Random.ListTyped.
type RandomListMatch struct {
	Category *string `json:"category,omitempty"`
	Group *string `json:"group,omitempty"`
	HtmlCode *[]any `json:"html_code,omitempty"`
	Name *string `json:"name,omitempty"`
	Unicode *[]any `json:"unicode,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Category string `json:"category"`
	Group string `json:"group"`
	HtmlCode []any `json:"html_code"`
	Name string `json:"name"`
	Unicode []any `json:"unicode"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Category *string `json:"category,omitempty"`
	Group *string `json:"group,omitempty"`
	HtmlCode *[]any `json:"html_code,omitempty"`
	Name *string `json:"name,omitempty"`
	Unicode *[]any `json:"unicode,omitempty"`
}

// Similar is the typed data model for the similar entity.
type Similar struct {
	Category string `json:"category"`
	Group string `json:"group"`
	HtmlCode []any `json:"html_code"`
	Name string `json:"name"`
	Unicode []any `json:"unicode"`
}

// SimilarLoadMatch is the typed request payload for Similar.LoadTyped.
type SimilarLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
