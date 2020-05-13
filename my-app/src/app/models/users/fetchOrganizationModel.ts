import { UserMetaData } from './userMetaData';
import { Organization } from './organization';


export interface FetchOrganizationResult {
    userMetaData: UserMetaData;
    userData: Organization;
}