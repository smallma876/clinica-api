import { getConnection } from '../config/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../domain/user';

export class AuthModel {
    static async login(document: string): Promise<User> {
        const connection = await getConnection();
        const query = 'SELECT * FROM users WHERE dni = ?';
        const [queryResult] = await connection.execute<RowDataPacket[]>(query, [document]);
        const [user] = queryResult;
        connection.end();

        return user as User;
    }

    static async updatePassword(document: string, passwordHash: string) {
        const connection = await getConnection();
        const query = 'UPDATE users SET password_hash = ? WHERE dni = ?';
        const [result] = await connection.execute<ResultSetHeader>(query, [passwordHash, document]);
        connection.end();

        return result;
    }
}
