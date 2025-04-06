import { QueryResult, ResultSetHeader } from 'mysql2';
import { User, UserRequest } from './User';

export interface UserModel {
    login(document: string): Promise<User>;
    updatePassword(document: string, passwordHash: string): Promise<ResultSetHeader>;
    register(user: UserRequest): Promise<QueryResult>;
}
