import { Request, Response } from 'express';
import { PatientModel } from '../domain/PatientModel';

export class PatientController {
    patientModel: PatientModel;

    constructor(patientModel: PatientModel) {
        this.patientModel = patientModel;
    }

    getPatientByDocument = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const patient = await this.patientModel.getPatientByDocument(id);
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    getPatient = async (req: Request, res: Response) => {
        const documentNumber = req['user']?.dni as string;
        try {
            const patient = await this.patientModel.getPatientByDocument(documentNumber);
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json(error);
        }
    };
}
