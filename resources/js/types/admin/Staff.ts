export type Staff = {
    id: number;
    full_name: string;
    designation: string;
    department: string | null;
    image: string | null;
    phone: string | null;
    email: string | null;
    bio: string | null;
    fb_url: string | null;
    insta_url: string | null;
    linkedin_url: string | null;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
