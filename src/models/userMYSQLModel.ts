import { getConnection } from '../config/db';
import { QueryResult, ResultSetHeader, RowDataPacket } from 'mysql2';
import { User, UserRequest } from '../domain/user';
import { UserModel } from '../domain/UserModel';

export class UserMYSQLModel implements UserModel {
    login = async (document: string): Promise<User> => {
        const connection = await getConnection();
        const query = 'SELECT * FROM users WHERE document_number = ?';
        const [queryResult] = await connection.execute<RowDataPacket[]>(query, [document]);
        const [user] = queryResult;
        connection.end();

        return user as User;
    };

    updatePassword = async (document: string, passwordHash: string): Promise<ResultSetHeader> => {
        const connection = await getConnection();
        const query = 'UPDATE users SET password_hash = ? WHERE document_number = ?';
        const [result] = await connection.execute<ResultSetHeader>(query, [passwordHash, document]);
        connection.end();

        return result;
    };

    register = async (user: UserRequest): Promise<QueryResult> => {
        const {
            documentNumber,
            documentType,
            name,
            lastName,
            lastName2,
            email,
            phone,
            mobilePhone,
            password,
            maritalStatus,
            birthdate,
            gender,
            domicileStreet,
        } = user;
        const connection = await getConnection();
        const userQuery = `INSERT INTO users (
                document_number, document_type, name, last_name, last_name2, email, phone, mobile_phone, 
                password_hash, marital_status, birthdate, gender, domicile_street, role, profile_picture_url, 
                specialty_id, created_at ) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,NOW())`;
        const [result] = await connection.query<QueryResult>(userQuery, [
            documentNumber,
            documentType,
            name,
            lastName,
            lastName2,
            email,
            phone,
            mobilePhone,
            password,
            maritalStatus,
            birthdate,
            gender,
            domicileStreet,
            'patient',
            'profile_picture_url',
            '1',
        ]);

        return result;
    };
}
