import {
    Anchor,
    Button,
    Checkbox,
    JsonInput,
    Menu,
    MultiSelect,
    NativeSelect,
    NumberInput,
    PasswordInput,
    Select,
    TextInput,
    Textarea,
    createTheme,
    MantineColorsTuple, AppShellHeader
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

import { Link } from '@inertiajs/react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

const colorsTuple: MantineColorsTuple = [
    '#e1f8ff',
    '#cbedff',
    '#9ad7ff',
    '#64c1ff',
    '#3aaefe',
    '#20a2fe',
    '#099cff',
    '#0088e4',
    '#0079cd',
    '#0068b6'
];

const InputStyles = {
    label: {
        color: 'var(--foreground)',
    },
    input: {
        color: 'var(--foreground)',
        backgroundColor: 'transparent',
    },
};

const theme = createTheme({
    primaryColor: 'blue',

    defaultRadius: 'sm',

    components: {
        Anchor: Anchor.extend({
            defaultProps: {
                // @ts-expect-error - Component is not defined in the Mantine core props
                component: Link,
                underline: 'always',
                classNames: {
                    root: 'text-foreground! hover:text-accent',
                },
            },
        }),
        Button: Button.extend({
            defaultProps: {
                size: 'sm',
                classNames: {
                    root: 'rounded-full',
                },
            },
        }),
        TextInput: TextInput.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        PasswordInput: PasswordInput.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        Textarea: Textarea.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        JsonInput: JsonInput.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        DateTimePicker: DateTimePicker.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        NumberInput: NumberInput.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        NativeSelect: NativeSelect.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        Select: Select.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    ...InputStyles,
                },
            },
        }),
        MultiSelect: MultiSelect.extend({
            defaultProps: {
                size: 'sm',
                classNames: {
                    input: 'border-0',
                    pill: 'border border-gray-800',
                },
            },
        }),
        Checkbox: Checkbox.extend({
            defaultProps: {
                size: 'sm',
                styles: {
                    label: {
                        color: 'var(--foreground)',
                    },
                },
            },
        }),
        Menu: Menu.extend({
            defaultProps: {
                classNames: {
                    item: 'bg-background hover:bg-muted!',
                    label: 'text-foreground',
                    itemLabel: 'text-foreground',
                },
                styles: {
                    dropdown: {
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                    },
                    divider: {
                        borderColor: 'var(--border)',
                    },
                    item: {
                        background: 'transparent',
                        color: 'var(--foreground)',
                    },
                },
            },
        }),
        AppShellHeader: AppShellHeader.extend({
            defaultProps: {
                styles: {
                    borderColor: 'var(--sidebar-border)',
                },
            },
        }),
    },
});

export default theme;
