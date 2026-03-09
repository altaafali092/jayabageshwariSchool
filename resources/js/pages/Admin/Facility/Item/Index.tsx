import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { PaginatedData, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/DataTable';
import Pagination from '@/components/Pagination';
import FlashToast from '@/components/FlashToast';
import { Facility } from '@/types/admin/Facility';
import { create, index } from '@/routes/admin/facility';

interface Props {
    facilities: PaginatedData<Facility>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Facilities',
        href: index().url, // Make sure route is generated
    },
];

export default function FacilityIndex({ facilities }: Props) {
    FlashToast();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Facilities" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Facilities</h1>
                        <p className="text-muted-foreground">
                            Manage school facilities content.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Add New Facility
                        </Link>
                    </Button>
                </div>

                <div className="flex-1">
                    <div className="container mx-auto py-4">
                        <DataTable columns={columns} data={facilities.data} />
                        <Pagination links={facilities.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
