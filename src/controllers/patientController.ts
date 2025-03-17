import { Request, Response } from 'express';
import { PatientModel } from '../models/patientModel';

export class PatientController {
    static async getPatientByDocument(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const patient = await PatientModel.getPatientByDocument(id);
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getPatient(req: Request, res: Response) {
        const documentNumber = req['user']?.dni as string;
        try {
            const patient = await PatientModel.getPatientByDocument(documentNumber);
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
