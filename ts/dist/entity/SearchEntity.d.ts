import { EmojihubEntityBase } from '../EmojihubEntityBase';
import type { EmojihubSDK } from '../EmojihubSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../EmojihubTypes';
declare class SearchEntity extends EmojihubEntityBase<Search> {
    constructor(client: EmojihubSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
