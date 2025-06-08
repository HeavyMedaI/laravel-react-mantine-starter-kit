import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { AppShell, Skeleton } from '@mantine/core';
import { TableReviews } from '@/components/table-reviews';
import ContentFootered from '@/components/ContentFootered';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {

    return (<AppLayout fullWidth={true} breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-sm p-1 w-full">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-sm border">
                    <Skeleton animate={true} className="h-full!" radius="sm" mb="xl" />
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-sm border">
                    <Skeleton animate={true} className="h-full!" radius="sm" mb="xl" />
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-sm border">
                    <Skeleton animate={true} className="h-full!" radius="sm" mb="xl" />
                </div>
            </div>
            <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex min-h-[100vh] flex-1 overflow-hidden rounded-sm border  bg-card">
                <TableReviews />
            </div>
        </div>
    </AppLayout>);

    const footerContent = (<span style={{color: 'black', fontWeight: 'bold'}}>Demo foooter</span>);
    return (
        <ContentFootered footer={footerContent}>
            <AppLayout fullWidth={true} breadcrumbs={breadcrumbs}>
                <Head title="Dashboard" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-sm p-1 w-full">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-sm border">
                            <Skeleton animate={true} className="h-full!" radius="sm" mb="xl" />
                        </div>
                        <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-sm border">
                            <Skeleton animate={true} className="h-full!" radius="sm" mb="xl" />
                        </div>
                        <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-sm border">
                            <Skeleton animate={true} className="h-full!" radius="sm" mb="xl" />
                        </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex min-h-[100vh] flex-1 overflow-hidden rounded-sm border  bg-card">
                        <TableReviews />
                    </div>
                </div>
            </AppLayout>
        </ContentFootered>
    );
}
