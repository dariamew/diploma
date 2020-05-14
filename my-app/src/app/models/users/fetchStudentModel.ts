import { UserMetaData } from './userMetaData';
import { Student } from './student';


export interface FetchStudentResult {
    userMetaData: UserMetaData;
    userData: Student;
}