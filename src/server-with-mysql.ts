import { createApp } from './app';
import { PatientMYSQLModel } from './models/patientMYSQLModel';
import { UserMYSQLModel } from './models/userMYSQLModel';

const userMYSQLModel = new UserMYSQLModel();
const patientMYSQLModel = new PatientMYSQLModel();

createApp({ userModel: userMYSQLModel, patientModel: patientMYSQLModel });
