import { IconChevronRight, IconLogout, IconSettings, IconSelector } from '@tabler/icons-react';
import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import classes from '../../../css/Mantine/UserButton.module.css';

import { type SharedData } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { getInitials } from '@mantine/core/lib/components/Avatar/get-initials/get-initials';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

export function UserButton() {
    const { auth } = usePage<SharedData>().props;

    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
        router.post(route('logout'));
    };

    return (
        <>
            <Menu position={"top"} withArrow={false} width={"auto"}>
                <Menu.Target>
                    <UnstyledButton className={classes.user} style={{padding: 'var(--mantine-spacing-sm)'}}>
                        <Group gap="sm">
                            <Avatar
                                src={auth.user.avatar}
                                name={auth.user.name}
                                radius="xl"
                                size="md"
                                color={"initials"}
                            />

                            <div style={{ flex: 1, width: 1 }}>
                                <Text truncate={"end"} size="sm" fw={500}>
                                    {auth.user.name}
                                </Text>

                                <Text truncate={"end"} c="dimmed" size="xs">
                                    {auth.user.email} adsadasd ads as
                                </Text>
                            </div>

                            <IconSelector size={14} stroke={1.5} />
                        </Group>
                    </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown className="border border-1">

                    <Menu.Label>
                        <Group gap="xs">
                            <Avatar
                                src={auth.user.avatar}
                                name={auth.user.name}
                                radius="xl"
                                size="sm"
                                color={"initials"}
                            />

                            <div style={{ flex: 1, width: 190 }}>
                                <Text truncate={"end"} size="sm" fw={500}>
                                    {auth.user.name}
                                </Text>

                                <Text truncate={"end"} c="dimmed" size="xs">
                                    {auth.user.email}
                                </Text>
                            </div>
                        </Group>
                    </Menu.Label>

                    <Menu.Divider />

                    <Menu.Item component={Link} href={route('profile.edit')}
                               leftSection={<IconSettings size={20} />}>
                        Settings
                    </Menu.Item>
                    <Menu.Divider />
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogout();
                        }}
                    >
                        <Menu.Item c="var(--destructive-foreground)" leftSection={<IconLogout />} type="submit">
                            <Text c="var(--destructive-foreground)">
                                Log Out
                            </Text>
                        </Menu.Item>
                    </form>

                </Menu.Dropdown>
            </Menu>
        </>
    );
}
