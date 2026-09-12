import { EmojihubEntityBase } from '../EmojihubEntityBase';
import type { EmojihubSDK } from '../EmojihubSDK';
import type { Control } from '../types';
import type { All, AllListMatch } from '../EmojihubTypes';
declare class AllEntity extends EmojihubEntityBase<All> {
    constructor(client: EmojihubSDK, entopts: any);
    make(this: AllEntity): AllEntity;
    list(this: any, reqmatch?: AllListMatch, ctrl?: Control): Promise<AllEntity[]>;
}
export { AllEntity };
