# Emojihub SDK utility: make_context

from projectname_sdk.core.context import EmojihubContext


def make_context_util(ctxmap, basectx):
    return EmojihubContext(ctxmap, basectx)
