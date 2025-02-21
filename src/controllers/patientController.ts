import { Request, Response } from 'express';
import { PatientModel } from '../models/patientModel';

export class PatientController {
    static async getPatientByDocument(req: Request, res: Response) {
        const id = Number(req.params.id);
        try {
            const patient = await PatientModel.getPatientByDocument(id);
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
