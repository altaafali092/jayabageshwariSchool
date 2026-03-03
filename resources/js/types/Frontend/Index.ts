import { Staff } from "../admin/Staff";

export type FacilityItem = {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string | null;
    image: string | null;
    icon: string | null;
    meta_data: Record<string, string> | null;
    position: number | null;
    status: boolean;
    created_at: string;
    updated_at: string;
};

export type Slider = {
    id: number;
    title: string;
    description: string;
    image: string;
    button_text: string;
    button_url: string;
    status: boolean;
    created_at: string;
    updated_at: string;
}
export type News = {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string;
    image: string;
    status: boolean;
    created_at: string;
    updated_at: string;
    event_date: string;
    event_time: string;
    event_location: string;
}
export type Staffs = {
    id: number;
    full_name: string;
    position: string;
    image: string;
    designation: string;
    created_at: string;
    updated_at: string;
}
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
    created_at: string;
    updated_at: string;
    is_open: boolean;
    computed_is_open: boolean;
    is_admission: boolean;
    office_from: string;
    office_to: string;
    key_contact_person: Staff;
    key_contact_sec_person: Staff;
}