import { AppShell, Skeleton } from '@mantine/core';
import { ReactNode } from 'react';


export default function ContentFootered({children, footer}: {children: ReactNode, footer: ReactNode}) {
    return (
        <>
            <AppShell>
                <AppShell.Main style={{padding: 0, margin: 'none !important;', marginBottom: 62}}>
                    {children}
                </AppShell.Main>

                <AppShell.Footer style={{height: 62, width: 'calc(100% - 275px)', marginLeft: 275}} >
                    {footer}
                </AppShell.Footer>
            </AppShell>
        </>
    );
}
