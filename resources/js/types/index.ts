export type * from './auth';
export type * from './navigation';
export type * from './ui';

import { InertiaLinkProps } from '@inertiajs/react';
import type { Auth } from './auth';
import { LucideIcon } from 'lucide-react';
import { OfficeSetting } from './Frontend/Index';

export type SharedData = {
    name: string;
    auth: Auth;
    sidebarOpen: boolean;
    officeSettings: OfficeSetting;
    [key: string]: unknown;
};

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}
export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: PaginationLink[];
}