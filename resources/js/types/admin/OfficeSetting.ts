import { Staff } from "./Staff";

export type OfficeSetting = {
    id: number;
    office_name: string;
    office_description: string;
    office_logo: string;
    office_address: string;
    office_email: string;
    office_phone: string;
    office_phone_2: string;
    gmap_url: string;
    yt_url: string;
    fb_url: string;
    insta_url: string;
    titok_url: string;
    is_admission: boolean;
    is_open: boolean;
    office_from: string;
    office_to: string;
    key_contact_person_id: number;
    key_contact_secperson_id: number;
    key_contact_person: Staff;
    key_contact_secperson: Staff;
}