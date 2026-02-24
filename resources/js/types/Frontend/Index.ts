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
}