import { Patient } from './Patient';

export interface PatientModel {
    getPatientByDocument: (id: string) => Promise<Patient>;
}
