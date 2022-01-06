<script>
    import { fade, scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import PollStore from "../store";
    import PollDetail from "./PollDetail.svelte";
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{ duration: 750 }}>  
            <PollDetail {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
