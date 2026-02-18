export interface AcademicItem {
    id: number
    academic_section_id: number

    key: string
    title: string | null
    subtitle: string | null
    description: string | null
    sort_order: number
    status: boolean
    icon: string | null
    meta_key: string | null
    meta_value: string | null

    academic_section?: {
        id: number
        title: string
        key: string
    }

    created_at: string
    updated_at: string
}
