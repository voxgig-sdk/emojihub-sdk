import { AllEntity } from './entity/AllEntity';
import { CategoryEntity } from './entity/CategoryEntity';
import { GroupEntity } from './entity/GroupEntity';
import { RandomEntity } from './entity/RandomEntity';
import { SearchEntity } from './entity/SearchEntity';
import { SimilarEntity } from './entity/SimilarEntity';
export type * from './EmojihubTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { EmojihubEntityBase } from './EmojihubEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class EmojihubSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    All(entopts?: Record<string, any>): AllEntity;
    Category(entopts?: Record<string, any>): CategoryEntity;
    Group(entopts?: Record<string, any>): GroupEntity;
    Random(entopts?: Record<string, any>): RandomEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    Similar(entopts?: Record<string, any>): SimilarEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): EmojihubSDK;
    tester(testopts?: any, sdkopts?: any): EmojihubSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof EmojihubSDK;
export { stdutil, config, BaseFeature, EmojihubEntityBase, EmojihubSDK, SDK, };
