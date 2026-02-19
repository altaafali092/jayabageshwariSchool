export interface AcademicSection {
    id: number
    academic_level_id: number

    key: string
    title: string | null
    subtitle: string | null
    description: string | null
    sort_order: number
    status: boolean
    image: string | null

    academic_level?: {
        id: number
        title: string
    }

    created_at: string
    updated_at: string
}
