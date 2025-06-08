import * as React from 'react';

export function AppContent({ fullWidth = false, children, ...props }: React.PropsWithChildren) {
    var _class = 'mx-auto flex h-full w-full flex-1 flex-col gap-4';
    if (!fullWidth) {
        _class += ' max-w-7xl';
    }
    return (
        <div className={_class} {...props}>
            {children}
        </div>
    );
}
