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

/** Match filter for All#list (any subset of All fields). */
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

/** Match filter for Category#list (any subset of Category fields). */
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

/** Match filter for Group#list (any subset of Group fields). */
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

/** Match filter for Random#list (any subset of Random fields). */
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

/** Match filter for Search#list (any subset of Search fields). */
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

