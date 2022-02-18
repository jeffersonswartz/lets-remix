import { writable } from 'svelte-local-storage-store';

export type Theme = {
    themeType: 'dark' | 'light';
};

export const theme = writable<Theme>('theme-settings', {
    themeType: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
});

theme.subscribe(({ themeType }) => {
    const { classList } = document.body;
    classList.remove('light', 'dark');
    classList.add(themeType);
});
