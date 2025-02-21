import { getConnection } from '../config/db';

export class PatientModel {
    static async getPatientByDocument(id: number) {
        let connection;
        try {
            connection = await getConnection();
            const [rows] = await connection.execute('SELECT * FROM patients WHERE document_number = ?', [id]);
            return rows[0];
        } catch (error) {
            throw new Error(error);
        } finally {
            connection.end();
        }
    }
}
