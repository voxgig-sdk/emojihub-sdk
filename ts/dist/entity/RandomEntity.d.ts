import { EmojihubEntityBase } from '../EmojihubEntityBase';
import type { EmojihubSDK } from '../EmojihubSDK';
import type { Control } from '../types';
import type { Random, RandomListMatch } from '../EmojihubTypes';
declare class RandomEntity extends EmojihubEntityBase<Random> {
    constructor(client: EmojihubSDK, entopts: any);
    make(this: RandomEntity): RandomEntity;
    list(this: any, reqmatch?: RandomListMatch, ctrl?: Control): Promise<RandomEntity[]>;
}
export { RandomEntity };
