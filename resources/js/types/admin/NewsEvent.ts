import { NewsCategory } from "./NewsCategory";

export type NewsEvent = {
    id: number;
    category: string;
    title: string;
    slug: string;
    description: string;
    image: string | string[];
    event_date: string;
    event_time: string;
    event_location: string;
    status: boolean;
    deleted_at: string;
    created_at: string;
    updated_at: string;

}   