export type AdmissionQuery = {
    id: number;
    full_name: string;
    date_of_birth: string;
    gender: string;
    grade_applying_for: string;
    nationality: string;
    father_name: string;
    mother_name: string;
    parent_phone: string;
    parent_email: string;
    parent_address: string;
    previous_school_name: string;
    previous_last_grade: string;
    medical_info: string | null;
    require_attend: string | null;
    remarks: string | null;
    documents: string[] | null;
    created_at: string;
    updated_at: string;
}