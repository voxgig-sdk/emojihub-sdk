# Emojihub SDK utility: make_context

from core.context import EmojihubContext


def make_context_util(ctxmap, basectx):
    return EmojihubContext(ctxmap, basectx)
