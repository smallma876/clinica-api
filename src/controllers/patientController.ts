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

    registerPatient = async (req: Request, res: Response) => {
        try {
            const patientRequest = req.body;

            const result = await this.patientModel.registerPatient(patientRequest);

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    };
}
