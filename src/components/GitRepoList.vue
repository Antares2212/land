<template>
  <div class="reposList">
    <div class="title">
      <h1>Поиск Репозиториев</h1>
      <div class="refresh" @click="updatePage(param.page)">
        <v-icon scale="1.3" name="hi-refresh"/>
      </div>
    </div>
    <SearchBar :handleSubmit="handleSubmit">
      <DropDown id="sort" label="Sort" :options="typeSort" v-model="sort"/>
      <DropDown id="order" label="Order" :options="typeOrder" v-model="order"/>
    </SearchBar>
    <div v-if="isLoading">
      <LoadingPage :isLoading="isLoading"/>
    </div>
    <div v-else-if="repositories.items">
      <RepoList v-for="item in repositories.items" :key="item.id" :data="item" :flag="'repos'"/>
    </div>
    <div v-else>
      Данные отсутствуют
    </div>
    <PagginationBar :dataList="repositories.items" :param="param" :updatePage="updatePage" :totalPage="repositories.totalPage" />
  </div>
</template>
<script>
import DropDown from '../app/DropDown.vue'
import SearchBar from '@/app/SearchBar.vue'
import { useSearchRepo } from '@/hooks/useSearchRepo'
import { useGit } from '@/hooks/useGit'
import RepoList from './RepoList.vue'
import PagginationBar from '@/app/PagginationBar.vue'
import LoadingPage from '@/app/LoadingPage.vue';
import { useLoading } from '@/hooks/useLoading'

export default {
  components: { SearchBar, DropDown, RepoList, PagginationBar, LoadingPage },
  data() {
    return {
      sort: '',
      order: '',
      typeSort: [
        { value: 'stars', label: 'Stars' },
        { value: 'forks', label: 'Forks' },
        { value: 'help-wanted-issues', label: 'Help-wanted-issues' },
        { value: 'updated', label: 'Updated' }
      ],
      typeOrder: [
        { value: 'desc', label: 'От большего к меньшему' },
        { value: 'asc', label: 'От меньшего к большему' }
      ]
    }
  },
  setup: () => {
    const { isLoading, setLoading } = useLoading()
    const { repositories, searchRepo } = useGit(setLoading)

    const param = {
      q: 'pomodoro',
      per_page: 10,
      page: 1,
      order: 'abc',
      sort: ''
    }
    
    const { updatePage, handleSubmit } = useSearchRepo(param, searchRepo)

    return {
      updatePage,
      handleSubmit,
      repositories,
      param,
      isLoading
    }
  }
}
</script>
<style scoped lang="scss">
  
</style>