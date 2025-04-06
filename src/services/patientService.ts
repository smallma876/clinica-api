import { PatientModel } from '../domain/PatientModel';
import { UserModel } from '../domain/UserModel';

interface PatientServiceProps {
    patientModel: PatientModel;
    userModel: UserModel;
}

class PatientService {
    patientModel: PatientModel;
    userModel: UserModel;

    constructor({ patientModel, userModel }: PatientServiceProps) {
        this.patientModel = patientModel;
        this.userModel = userModel;
    }

    /* getRegisterPatient = async () => {
       const result = await this.userModel.register();
       const result2 = await this.patientModel.register();
    }; */
}

export default PatientService;
