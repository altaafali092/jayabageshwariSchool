import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { PaginatedData, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/DataTable';

import Pagination from '@/components/Pagination';
import FlashToast from '@/components/FlashToast';
import { Testomonial } from '@/types/admin/Staff';
import { create, index } from '@/routes/admin/testomonial';



interface Props {
    testomonials: PaginatedData<Testomonial>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testomonial',
        href: index().url,
    },
];

export default function TestomonialIndex({ testomonials }: Props) {
    FlashToast()
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Testomonial" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl tracking-tight uppercase font-black">Testomonial</h1>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Manage Testomonial
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Add Testomonial
                        </Link>
                    </Button>
                </div>

                {/* Data Table */}
                <div className="flex-1">
                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={testomonials.data} />
                        <Pagination links={testomonials.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}