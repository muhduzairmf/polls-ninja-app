<script>
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Footer from "./layouts/Footer.svelte";
  import Header from "./layouts/Header.svelte";
  import Tabs from "./layouts/Tabs.svelte";
  import PollStore from "./store";

  // tab
  let items = [ 'Current polls', 'Add new poll' ];
  let activeItem = 'Current polls';
  const tabChange = (e) => { activeItem = e.detail; };

  const handleAdd = (e) => {
    console.log($PollStore);
    activeItem = 'Current polls';
  }
  
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Current polls'}
    <PollList />
  {:else if activeItem === 'Add new poll'}
    <PollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
