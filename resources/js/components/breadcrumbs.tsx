import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/react';
import { Anchor, Breadcrumbs as MantineBreadcrumbs, Text } from '@mantine/core';

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: BreadcrumbItemType[] }) {
    return (
        <>
            {breadcrumbs.length > 0 && (
                <MantineBreadcrumbs>
                    {breadcrumbs.map((item, index) => (
                        <Text component={Link} href={item.href} key={index} underline="never" c="var(--sidebar-foreground)">
                            {item.title}
                        </Text>
                    ))}
                </MantineBreadcrumbs>
            )}
        </>
    );
}
