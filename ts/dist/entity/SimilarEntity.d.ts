import { EmojihubEntityBase } from '../EmojihubEntityBase';
import type { EmojihubSDK } from '../EmojihubSDK';
import type { Control } from '../types';
import type { Similar, SimilarLoadMatch } from '../EmojihubTypes';
declare class SimilarEntity extends EmojihubEntityBase<Similar> {
    constructor(client: EmojihubSDK, entopts: any);
    make(this: SimilarEntity): SimilarEntity;
    load(this: any, reqmatch?: SimilarLoadMatch, ctrl?: Control): Promise<SimilarEntity>;
}
export { SimilarEntity };
