import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { PaginatedData, type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/DataTable';

import Pagination from '@/components/Pagination';
import FlashToast from '@/components/FlashToast';
import { Gallery } from '@/types/admin/Gallery';
import { create, index } from '@/routes/admin/gallery';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';


interface Props {
    galleries: PaginatedData<Gallery>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'sliders',
        href: index().url,
    },
];

export default function SliderIndex({ galleries }: Props) {
    FlashToast()

    const currentType = new URLSearchParams(window.location.search).get('type') || 'all';

    const handleTabChange = (val: string) => {
        router.get(index({ query: { type: val === 'all' ? undefined : val } }).url, {}, { preserveScroll: true, preserveState: true });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="sliders" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Galleries</h1>
                        <p className="text-muted-foreground">
                            Manage application Galleries and access controls.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create Gallery
                        </Link>
                    </Button>
                </div>

                {/* Tabs */}
                <Tabs value={currentType} onValueChange={handleTabChange}>
                    <div className="flex items-center justify-between mb-4">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="Photo">Photos</TabsTrigger>
                            <TabsTrigger value="Video">Videos</TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Data Table */}
                    <div className="flex-1">
                        <div className="container mx-auto py-4">
                            <DataTable columns={columns} data={galleries.data} />
                            <Pagination links={galleries.links} />
                        </div>
                    </div>
                </Tabs>
            </div>
        </AppLayout>
    );
}
