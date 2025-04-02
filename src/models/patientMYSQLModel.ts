import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { getConnection } from '../config/db';
import { PatientModel } from '../domain/PatientModel';
import { Patient, PatientRequest } from '../domain/Patient';

export class PatientMYSQLModel implements PatientModel {
    getPatientByDocument = async (id: string): Promise<Patient> => {
        const connection = await getConnection();
        const query = 'SELECT * FROM patients WHERE document_number = ?';
        const [queryResult] = await connection.execute<RowDataPacket[]>(query, [id]);
        const [user] = queryResult;
        connection.end();

        return user as Patient;
    };

    registerPatient = async (patient: PatientRequest): Promise<void> => {
        const connection = await getConnection();

        try {
            const {
                documentType,
                documentNumber,
                name,
                lastName,
                lastName2,
                email,
                phone,
                mobilePhone,
                birthdate,
                gender,
                maritalStatus,
                domicileStreet,
                termsAndConditionFlag,
                promotionsFlag,
                password,
            } = patient;

            await connection.beginTransaction();

            const [userResult] = await connection.execute<ResultSetHeader>(
                `INSERT INTO users (
                document_number, document_type, name, last_name, last_name2, email, phone, mobile_phone, 
                password_hash, marital_status, birthdate, gender, domicile_street, role, profile_picture_url, 
                specialty_id, created_at ) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,NOW())`,
                [
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
                ]
            );

            const userId = userResult.insertId;

            await connection.execute(
                `INSERT INTO patients 
                 (user_id, clinic_history_his6, clinic_history_his5, client_code_his6, 
                 is_portal_user, is_cuidate, terms_and_condition_flag, 
                 promotions_flag, favorites_medicals, investigations) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [userId, null, null, null, null, null, termsAndConditionFlag, promotionsFlag, null, null]
            );

            await connection.commit();
        } catch {
            await connection.rollback();
        } finally {
            await connection.end();
        }
    };
}
