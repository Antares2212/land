<template>
  <div class="reposList">
    <div class="title">
      <h1>Сохраненные Репозитории</h1>
      <div class="refresh" @click="updatePage(param.page)">
        <v-icon scale="1.3" name="hi-refresh"/>
      </div>
    </div>
    <div v-if="isLoading">
      <LoadingPage :isLoading="isLoading"/>
    </div>
    <div v-else-if="savedRepositories.items">
      <RepoList v-for="item in savedRepositories.items" :deleteRepo="deleteSavedRepo" :key="item.id" :data="item" :flag="'saved'"/>
    </div>
    <div v-else>
      {{ savedRepositories.message }}
    </div>
    <PagginationBar :dataList="savedRepositories.items" :param="param" :updatePage="updatePage" :totalPage="savedRepositories.totalPage" />
  </div>
</template>
<script>
import PagginationBar from '@/app/PagginationBar.vue';
import RepoList from '@/components/RepoList.vue';
import LoadingPage from '@/app/LoadingPage.vue';
import { useGit } from '@/hooks/useGit';
import { useSearchRepo } from '@/hooks/useSearchRepo';
import { useLoading } from '@/hooks/useLoading';

export default {
  components: { RepoList, PagginationBar, LoadingPage },
  setup: () => {    
    const { isLoading, setLoading } = useLoading()
    const { savedRepositories, getSaveRepo, deleteSavedRepo } = useGit(setLoading)

    const param = {
      per_page: 10,
      page: 1,
    }    
    
    const { updatePage, handleSubmit } = useSearchRepo(param, getSaveRepo)

    return {
      updatePage,
      handleSubmit,
      savedRepositories,
      param,
      isLoading,
      deleteSavedRepo
    }
  }
}
</script>
<style scoped lang="scss">

</style>