import { useState } from 'react';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';

import classes from '../../../css/Mantine/NavbarLinksGroup.module.css';
import { Link } from '@inertiajs/react';

interface LinksGroupProps {
    icon: React.FC<any>;
    label: string;
    href?: string;
    isCurrent?: boolean;
    links?: { label: string; link: string }[];
    activeMenu: () => void;
    setActiveMenu: () => void;
}

export function LinksGroup({ icon: Icon, label, href, links, isCurrent, activeMenu, setActiveMenu }: LinksGroupProps) {
    const hasLinks = Array.isArray(links);
    const [opened, setOpened] = useState(isCurrent || activeMenu);
    const items = (hasLinks ? links : []).map((link, index) => (
        <Text<'a'>
            component="a"
            className={classes.link}
            href={link.link}
            color="primary"
            key={'submenu-item-' + link.label + '-' + index}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </Text>
    ));

    if (!hasLinks) {
        return (
            <>
                <UnstyledButton
                    href={href}
                    component={Link}
                    className={classes.control}
                    data-active={isCurrent}
                >
                    <Group justify="space-between" gap={0}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <ThemeIcon variant="light" size={30}>
                                <Icon size={18} />
                            </ThemeIcon>
                            <Box ml="md">{label}</Box>
                        </Box>
                        {hasLinks && (
                            <IconChevronRight
                                className={classes.chevron}
                                stroke={1.5}
                                size={16}
                                style={{ transform: isCurrent ? 'rotate(-90deg)' : 'none' }}
                            />
                        )}
                    </Group>
                </UnstyledButton>
            </>
        );
    }

    var active = label == activeMenu || isCurrent;

    return (
        <>
            <UnstyledButton
                onClick={() => {
                    setOpened((o) => !o);
                    if (active) {
                        setActiveMenu(undefined);
                    }else{
                        setActiveMenu(label);
                    }
                }}
                className={classes.control}
                data-active={active || undefined}
            >
                <Group justify="space-between" gap={0}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant="light" size={30}>
                            <Icon size={18} />
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>
                    {hasLinks && (
                        <IconChevronRight
                            className={classes.chevron}
                            stroke={1.5}
                            size={16}
                            style={{ transform: active ? 'rotate(-90deg)' : 'none' }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            {hasLinks ? <Collapse transitionTimingFunction={"ease-out"} transitionDuration={400} in={active}>{items}</Collapse> : null}
        </>
    );
}
