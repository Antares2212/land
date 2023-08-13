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
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    
    .works {
      grid-column: 2;
    }
  }  
</style>
