import { Context } from './Context';
declare class EmojihubError extends Error {
    isEmojihubError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { EmojihubError };
