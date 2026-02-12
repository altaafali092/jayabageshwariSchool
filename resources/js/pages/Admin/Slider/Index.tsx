import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { PaginatedData, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/DataTable';
import { create, index } from '@/routes/admin/slider';
import Pagination from '@/components/Pagination';
import FlashToast from '@/components/FlashToast';
import { Slider } from '@/types/Admin/Slider';

interface Props {
    sliders: PaginatedData<Slider>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'sliders',
        href: index().url,
    },
];

export default function SliderIndex({ sliders }: Props) {
    FlashToast()
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="sliders" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
                        <p className="text-muted-foreground">
                            Manage application Categories and access controls.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create Slider
                        </Link>
                    </Button>
                </div>

                {/* Data Table */}
                <div className="flex-1">
                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={sliders.data} />
                        <Pagination links={sliders.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}