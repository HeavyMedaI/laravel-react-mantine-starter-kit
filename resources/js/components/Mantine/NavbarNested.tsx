import { act, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import {
    IconAdjustments,
    IconCalendarStats,
    IconFileAnalytics,
    IconGauge,
    IconLock,
    IconNotes,
    IconPresentationAnalytics, IconX
} from '@tabler/icons-react';
import { Button, Code, Group, ScrollArea, Title, Tooltip, UnstyledButton } from '@mantine/core';
import { LinksGroup } from './NavbarLinksGroup';
import { UserButton } from './UserButton';

import { Logo } from '../../../svg/logo';
import { MantineLogo } from '@mantinex/mantine-logo';

import classes from '../../../css/Mantine/MantineSidebar.module.css';
import dnv_classess from '../../../css/Mantine/DoubleNavbar.module.css';
import { isMobile } from '@headlessui/react/dist/utils/platform';
import { NavUser } from '@/components/nav-user';

const mockdata = [
    { label: 'Dashboard', icon: IconGauge, href: '/dashboard', isCurrent: true, },
    {
        label: 'Market news',
        icon: IconNotes,
        links: [
            { label: 'Overview', link: '/' },
            { label: 'Forecasts', link: '/' },
            { label: 'Outlook', link: '/' },
            { label: 'Real time', link: '/' },
        ],
    },
    {
        label: 'Releases',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    { label: 'Analytics', icon: IconPresentationAnalytics },
    { label: 'Contracts', icon: IconFileAnalytics },
    { label: 'Settings', icon: IconAdjustments },
    {
        label: 'Security',
        icon: IconLock,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];

export function NavbarNested({collapsed, toggleMobile, toggleDesktop, desktopOpened}: {className?: string; collapsed: boolean; toggleMobile: () => void; toggleDesktop: () => void; desktopOpened: boolean}) {
    const isMobile = useIsMobile();
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [activeLink, setActiveLink] = useState('Settings');

    const links = mockdata.map((item, index) => <LinksGroup {...item} key={'menu-' + item.label + '-' + index} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />);

    if (!collapsed) {
        return (
            <nav className={classes.navbar}>
                <div className={classes.header}>
                    <Group justify="space-between">
                        <Logo style={{ width: 120, height: 27 }} />
                        {isMobile && (
                            <Button onClick={toggleMobile} variant="icon" className="hover:bg-muted! bg-transparent! p-0! px-2!" aria-label="Close sidebar">
                                <IconX size={20} color="var(--sidebar-foreground)" />
                            </Button>
                        )}
                    </Group>
                </div>

                <ScrollArea className={classes.links}>
                    <div className={classes.linksInner}>{links}</div>
                </ScrollArea>

                <div className={classes.footer}>
                    <UserButton />
                </div>
            </nav>
        );
    }

    if(!isMobile) {
        const mainLinks = mockdata.map((link, index) => {
            var active = link.label == activeMenu || link.isCurrent;
            const hasLinks = Array.isArray(link.links);

            return (<Tooltip
                label={link.label}
                position="right"
                withArrow
                transitionProps={{ duration: 0 }}
                key={'submenu-' + link.label + '-' + index}
            >
                <UnstyledButton
                    onClick={() => {
                        if (hasLinks) {
                            toggleDesktop();
                            setTimeout(() => {
                                setActiveMenu(link.label);
                            }, 100);
                        }
                    }}
                    className={dnv_classess.mainLink}
                    data-active={active}
                >
                    <link.icon size={22} stroke={1.5} />
                </UnstyledButton>
            </Tooltip>);
        });

        return (
            <nav className={dnv_classess.navbar}>
                <div className={dnv_classess.wrapper}>
                    <div className={dnv_classess.aside}>
                        <div className={dnv_classess.logo}>
                            <MantineLogo type="mark" size={30} />
                        </div>
                        {mainLinks}
                    </div>
                </div>
            </nav>
        );
    }
};

