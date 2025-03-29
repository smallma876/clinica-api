import { RowDataPacket } from 'mysql2';
import { getConnection } from '../config/db';
import { PatientModel } from '../domain/PatientModel';
import { Patient } from '../domain/Patient';

export class PatientMYSQLModel implements PatientModel {
    getPatientByDocument = async (id: string): Promise<Patient> => {
        const connection = await getConnection();
        const query = 'SELECT * FROM patients WHERE document_number = ?';
        const [queryResult] = await connection.execute<RowDataPacket[]>(query, [id]);
        const [user] = queryResult;
        connection.end();

        return user as Patient;
    };

    registerPatient = async (patient: Patient): Promise<Patient> => {
        return patient;
    };
}
