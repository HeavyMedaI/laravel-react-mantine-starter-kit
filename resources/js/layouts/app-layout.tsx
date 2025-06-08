import { useAppearance } from '@/hooks/use-appearance';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    fullWidth: boolean;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({children, fullWidth = false, breadcrumbs, ...props }: AppLayoutProps) => {
    useAppearance();
    return (
        <AppLayoutTemplate fullWidth={fullWidth} breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppLayoutTemplate>
    );
};
