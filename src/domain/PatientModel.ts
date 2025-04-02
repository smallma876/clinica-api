/* import { QueryResult } from 'mysql2'; */
import { Patient, PatientRequest } from './Patient';

export interface PatientModel {
    getPatientByDocument: (id: string) => Promise<Patient>;
    registerPatient: (patient: PatientRequest) => Promise<void>;
}
