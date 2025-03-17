import { RowDataPacket } from 'mysql2';
import { getConnection } from '../config/db';

export class PatientModel {
    static async getPatientByDocument(id: string) {
        const connection = await getConnection();
        const query = 'SELECT * FROM patients WHERE document_number = ?';
        const [queryResult] = await connection.execute<RowDataPacket[]>(query, [id]);
        const [user] = queryResult;
        connection.end();
        return user;
    }
}
