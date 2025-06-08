import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';

import { AppContent } from '@/components/app-content';
import { AppHeader } from '@/components/app-header';
import { NavbarNested } from '@/components/Mantine/NavbarNested';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSideBar } from '@/hooks/use-sidebar';

interface AppShellProps {
    children: React.ReactNode;
    fullWidth: boolean;
    variant?: 'header' | 'sidebar';
    breadcrumbs?: BreadcrumbItemType[];
}

const Shell = ({ children, fullWidth, breadcrumbs = [] }: AppShellProps) => {
    const { state: desktopOpened, toggle: toggleDesktop } = useSideBar();
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

    const isMobile = useIsMobile();

    const collapsed = isMobile ? false : !desktopOpened;

    return (
        <AppShell
            padding="md"
            layout="alt"
            className="bg-background!"
            header={{ height: 60 }}
            navbar={{
                width: isMobile ? 275 : desktopOpened ? 275 : 64,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: false },
            }}
        >
            <AppShell.Header style={{ borderColor: 'var(--sidebar-border)' }}>
                <AppHeader breadcrumbs={breadcrumbs} toggleDesktop={toggleDesktop} toggleMobile={toggleMobile} />
            </AppShell.Header>
            <AppShell.Navbar style={{ ...(!isMobile && { transition: 'width 0.2s ease' }) }}>
                <NavbarNested className="group peer" collapsed={collapsed} toggleMobile={toggleMobile} toggleDesktop={toggleDesktop} desktopOpened={desktopOpened} />
            </AppShell.Navbar>
            <AppShell.Main bg={"var(--muted)"} className="flex h-full w-full flex-col">
                <AppContent fullWidth={fullWidth}>{children}</AppContent>
            </AppShell.Main>
        </AppShell>
    );
};

export default Shell;
