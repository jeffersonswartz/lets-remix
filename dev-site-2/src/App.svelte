<script type="ts">
import NavigationPanel from './Components/NavigationPanel.svelte';
import { theme } from './stores/theme.store';
</script>

<main
    class:dark="{$theme.themeType === 'dark'}"
    class="flex flex-col items-center bg-white dark:bg-slate-900 dark:text-white w-full h-full"
>
    <NavigationPanel />
</main>
