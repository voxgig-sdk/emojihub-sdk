# Typed models for the Emojihub SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class All:
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


@dataclass
class AllListMatch:
    category: Optional[str] = None
    group: Optional[str] = None
    html_code: Optional[list] = None
    name: Optional[str] = None
    unicode: Optional[list] = None


@dataclass
class Category:
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


@dataclass
class CategoryLoadMatch:
    id: str


@dataclass
class CategoryListMatch:
    category: Optional[str] = None
    group: Optional[str] = None
    html_code: Optional[list] = None
    name: Optional[str] = None
    unicode: Optional[list] = None


@dataclass
class Group:
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


@dataclass
class GroupLoadMatch:
    id: str


@dataclass
class GroupListMatch:
    category: Optional[str] = None
    group: Optional[str] = None
    html_code: Optional[list] = None
    name: Optional[str] = None
    unicode: Optional[list] = None


@dataclass
class Random:
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


@dataclass
class RandomListMatch:
    category: Optional[str] = None
    group: Optional[str] = None
    html_code: Optional[list] = None
    name: Optional[str] = None
    unicode: Optional[list] = None


@dataclass
class Search:
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


@dataclass
class SearchListMatch:
    category: Optional[str] = None
    group: Optional[str] = None
    html_code: Optional[list] = None
    name: Optional[str] = None
    unicode: Optional[list] = None


@dataclass
class Similar:
    category: str
    group: str
    html_code: list
    name: str
    unicode: list


@dataclass
class SimilarLoadMatch:
    id: str

