import { UserRequest } from './user';

export interface Patient {
    user_id: number;
    document_type: string;
    document_number: string;
    age: number;
    gender: string;
    marital_status: string;
    domicile_street: string;
    shipping_reference: string;
    shipping_district: string;
    clinic_history_his6: string;
    clinic_history_his5: string;
    client_code_his6: string;
    is_portal_user: number;
    is_cuidate: number;
    terms_and_condition_flag: number;
    promotions_flag: string;
    favorites_medicals: string;
    investigations: number;
}

export interface PatientRequest extends UserRequest {
    clinicHistoryHis6: string | null;
    clinicHistoryHis5: string | null;
    clientCodeHis6: string | null;
    isPortalUser: string | null;
    isCuidate: string | null;
    termsAndConditionFlag: boolean;
    promotionsFlag: boolean;
    favoritesMedicals: string | null;
    investigations: string | null;
}
