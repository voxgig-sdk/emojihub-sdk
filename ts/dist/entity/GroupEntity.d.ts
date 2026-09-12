import { EmojihubEntityBase } from '../EmojihubEntityBase';
import type { EmojihubSDK } from '../EmojihubSDK';
import type { Control } from '../types';
import type { Group, GroupLoadMatch, GroupListMatch } from '../EmojihubTypes';
declare class GroupEntity extends EmojihubEntityBase<Group> {
    constructor(client: EmojihubSDK, entopts: any);
    make(this: GroupEntity): GroupEntity;
    load(this: any, reqmatch?: GroupLoadMatch, ctrl?: Control): Promise<GroupEntity>;
    list(this: any, reqmatch?: GroupListMatch, ctrl?: Control): Promise<GroupEntity[]>;
}
export { GroupEntity };
