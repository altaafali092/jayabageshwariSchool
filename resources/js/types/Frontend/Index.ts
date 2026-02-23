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