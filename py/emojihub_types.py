# Typed models for the Emojihub SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class All(TypedDict):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class AllListMatch(TypedDict, total=False):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class Category(TypedDict):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class CategoryLoadMatch(TypedDict):
    id: str


class CategoryListMatch(TypedDict, total=False):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class Group(TypedDict):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class GroupLoadMatch(TypedDict):
    id: str


class GroupListMatch(TypedDict, total=False):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class Random(TypedDict):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class RandomListMatch(TypedDict, total=False):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class Search(TypedDict):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class SearchListMatch(TypedDict, total=False):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class Similar(TypedDict):
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


class SimilarLoadMatch(TypedDict):
    id: str
