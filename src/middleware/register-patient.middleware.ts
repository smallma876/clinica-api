import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const registerPatientValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const patient = req.body;

        const RegisterPatientSchema = z.object({
            documentNumber: z.string().length(8, 'El documento debe tener 8 numeros'),
            documentType: z.enum(['DNI', 'RUC', 'CE']),
            name: z.string(),
            lastName: z.string(),
            lastName2: z.string(),
            email: z.string().email(),
            phone: z.string(),
            mobilePhone: z.string(),
            birthdate: z.string(),
            gender: z.string(),
            maritalStatus: z.string(),
            domicileStreet: z.string(),
            termsAndConditionFlag: z.boolean(),
            promotionsFlag: z.boolean(),
            password: z.string(),
        });

        RegisterPatientSchema.parse(patient);

        next();
    } catch (error) {
        next(error);
    }
};
