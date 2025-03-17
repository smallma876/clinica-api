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
