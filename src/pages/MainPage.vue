<template>
  <div class="main">
    <div class="save">
      <SavedRepoList />
    </div>
    <div class="works">
      <GitRepoList />
    </div>
  </div>
</template>

<script>
import GitRepoList from '@/components/GitRepoList.vue'
import SavedRepoList from '@/components/SavedRepoList.vue';

export default {
  components: { GitRepoList, SavedRepoList },
  name: 'ResumePage',
}
</script>

<style lang="scss">
  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 32px;
    grid-auto-flow: dense;
  }  

  @media (max-width: 459px) {
    .main {
      display: flex;
      flex-direction: column;
    }
  }
</style>
