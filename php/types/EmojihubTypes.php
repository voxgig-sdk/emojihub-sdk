<?php
declare(strict_types=1);

// Typed models for the Emojihub SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** All entity data model. */
class All
{
    public string $category;
    public string $group;
    public array $html_code;
    public string $name;
    public array $unicode;
}

/** Request payload for All#list. */
class AllListMatch
{
    public ?string $category = null;
    public ?string $group = null;
    public ?array $html_code = null;
    public ?string $name = null;
    public ?array $unicode = null;
}

/** Category entity data model. */
class Category
{
    public string $category;
    public string $group;
    public array $html_code;
    public string $name;
    public array $unicode;
}

/** Request payload for Category#load. */
class CategoryLoadMatch
{
    public string $id;
}

/** Request payload for Category#list. */
class CategoryListMatch
{
    public ?string $category = null;
    public ?string $group = null;
    public ?array $html_code = null;
    public ?string $name = null;
    public ?array $unicode = null;
}

/** Group entity data model. */
class Group
{
    public string $category;
    public string $group;
    public array $html_code;
    public string $name;
    public array $unicode;
}

/** Request payload for Group#load. */
class GroupLoadMatch
{
    public string $id;
}

/** Request payload for Group#list. */
class GroupListMatch
{
    public ?string $category = null;
    public ?string $group = null;
    public ?array $html_code = null;
    public ?string $name = null;
    public ?array $unicode = null;
}

/** Random entity data model. */
class Random
{
    public string $category;
    public string $group;
    public array $html_code;
    public string $name;
    public array $unicode;
}

/** Request payload for Random#list. */
class RandomListMatch
{
    public ?string $category = null;
    public ?string $group = null;
    public ?array $html_code = null;
    public ?string $name = null;
    public ?array $unicode = null;
}

/** Search entity data model. */
class Search
{
    public string $category;
    public string $group;
    public array $html_code;
    public string $name;
    public array $unicode;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?string $category = null;
    public ?string $group = null;
    public ?array $html_code = null;
    public ?string $name = null;
    public ?array $unicode = null;
}

/** Similar entity data model. */
class Similar
{
    public string $category;
    public string $group;
    public array $html_code;
    public string $name;
    public array $unicode;
}

/** Request payload for Similar#load. */
class SimilarLoadMatch
{
    public string $id;
}

