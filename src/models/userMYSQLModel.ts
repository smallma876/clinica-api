import { getConnection } from '../config/db';
import { QueryResult, ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../domain/User';
import { UserModel } from '../domain/UserModel';

export class UserMYSQLModel implements UserModel {
    login = async (document: string): Promise<User> => {
        const connection = await getConnection();
        const query = 'SELECT * FROM users WHERE dni = ?';
        const [queryResult] = await connection.execute<RowDataPacket[]>(query, [document]);
        const [user] = queryResult;
        connection.end();

        return user as User;
    };

    updatePassword = async (document: string, passwordHash: string): Promise<ResultSetHeader> => {
        const connection = await getConnection();
        const query = 'UPDATE users SET password_hash = ? WHERE dni = ?';
        const [result] = await connection.execute<ResultSetHeader>(query, [passwordHash, document]);
        connection.end();

        return result;
    };

    register = async (user: User): Promise<QueryResult> => {
        const {
            dni,
            name,
            last_name,
            last_name2,
            email,
            phone,
            mobile_phone,
            password_hash,
            role,
            profile_picture_url,
            created_at,
            specialty_id,
        } = user;
        const connection = await getConnection();
        const userQuery =
            'INSERT INTO users (dni, name, last_name, last_name2, email, phone, mobile_phone, password_hash, role, profile_picture_url, created_at, specialty_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
        const [result] = await connection.query<QueryResult>(userQuery, [
            dni,
            name,
            last_name,
            last_name2,
            email,
            phone,
            mobile_phone,
            password_hash,
            role,
            profile_picture_url,
            created_at,
            specialty_id,
        ]);

        return result;
    };
}
