-- Emojihub SDK error

local EmojihubError = {}
EmojihubError.__index = EmojihubError


function EmojihubError.new(code, msg, ctx)
  local self = setmetatable({}, EmojihubError)
  self.is_sdk_error = true
  self.sdk = "Emojihub"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function EmojihubError:error()
  return self.msg
end


function EmojihubError:__tostring()
  return self.msg
end


return EmojihubError
