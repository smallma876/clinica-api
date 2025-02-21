export const mapperPatient = (patient) => {
    return {
        id: patient.id,
        name: patient.name,
        birthDate: patient.birthDate,
    };
};
