import { UserMetaData } from './userMetaData';
import { Admin } from './admin';


export interface FetchAdminResult {
    userMetaData: UserMetaData;
    userData: Admin;
}