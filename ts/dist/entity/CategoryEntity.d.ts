import { EmojihubEntityBase } from '../EmojihubEntityBase';
import type { EmojihubSDK } from '../EmojihubSDK';
import type { Control } from '../types';
import type { Category, CategoryLoadMatch, CategoryListMatch } from '../EmojihubTypes';
declare class CategoryEntity extends EmojihubEntityBase<Category> {
    constructor(client: EmojihubSDK, entopts: any);
    make(this: CategoryEntity): CategoryEntity;
    load(this: any, reqmatch?: CategoryLoadMatch, ctrl?: Control): Promise<CategoryEntity>;
    list(this: any, reqmatch?: CategoryListMatch, ctrl?: Control): Promise<CategoryEntity[]>;
}
export { CategoryEntity };
