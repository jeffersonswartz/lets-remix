<script lang="ts">
import { Theme, theme } from '../stores/theme.store';

let themeTypes: Theme[] = [{ themeType: 'dark' }, { themeType: 'light' }];

function onClick(themeType: 'dark' | 'light') {
    $theme.themeType = themeType;
}
</script>

{#each themeTypes as { themeType }}
    <div on:click="{() => onClick(themeType)}">{themeType}</div>
{/each}
