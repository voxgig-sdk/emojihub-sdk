# Emojihub SDK utility: make_context
require_relative '../core/context'
module EmojihubUtilities
  MakeContext = ->(ctxmap, basectx) {
    EmojihubContext.new(ctxmap, basectx)
  }
end
