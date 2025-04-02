export interface User {
    id: number;
    dni: string;
    name: string;
    last_name: string;
    last_name2: string;
    email: string;
    phone: string;
    mobile_phone: string;
    password_hash: string;
    role: string;
    profile_picture_url: string | null;
    created_at: string;
    specialty_id: string | null;
}

export interface UserRequest {
    documentNumber: string;
    documentType: string;
    name: string;
    lastName: string;
    lastName2: string;
    email: string;
    phone: string;
    mobilePhone: string;
    password: string;
    maritalStatus: string;
    birthdate: string;
    gender: string;
    domicileStreet: string;
    role: string;
    profilePictureUrl: string | null;
    specialtyId: string | null;
}
