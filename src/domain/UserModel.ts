import { ResultSetHeader } from 'mysql2';
import { User } from './User';

export interface UserModel {
    login(document: string): Promise<User>;
    updatePassword(document: string, passwordHash: string): Promise<ResultSetHeader>;
}
