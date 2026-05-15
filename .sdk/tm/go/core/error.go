package core

type EmojihubError struct {
	IsEmojihubError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewEmojihubError(code string, msg string, ctx *Context) *EmojihubError {
	return &EmojihubError{
		IsEmojihubError: true,
		Sdk:              "Emojihub",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *EmojihubError) Error() string {
	return e.Msg
}
