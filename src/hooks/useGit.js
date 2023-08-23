import { request } from "@/helpers/api"
import { ref, onMounted } from "vue"

export const useGit = (loading) => {
  const repositories = ref({
    items: [],
    totalPages: ''
  })
  const savedRepositories = ref({
    items: [],
    totalPages: ''
  })
  const param = {
    per_page: 10,
    page: 1,
  }

  const getSaveRepo = async (params) => {
    const searchParams = new URLSearchParams()

    Object.keys(params).forEach(key => {
      searchParams.append(key, params[key])
    })

    try {
      await request('GET', `/repos/saved/?${searchParams.toString()}`, {}, {}, loading)
        .then(res => savedRepositories.value = res)
    } catch (error) {
      console.error(error)
    }
  }

  const searchRepo = async (params) => {
    const searchParams = new URLSearchParams()

    Object.keys(params).forEach(key => {
      searchParams.append(key, params[key])
    })

    try {
      await request('GET', `/search/repo/?${searchParams.toString()}`, {}, {}, loading)
        .then(res => repositories.value = res)
    } catch (error) {
      console.error(error)
    }
  }

  const addRepo = async (data) => {
    try {
      await request('GET', '/repos/save/' + data.owner.login + '/' + data.name)
      .then(res => savedRepositories.value.items.push(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  const deleteSavedRepo = async (id) => {
    try {
      await request('DELETE', `/repos/saved/delete/${id}`)
      deleteRepo(id)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteRepo = async (id) => {
    savedRepositories.value.items = savedRepositories.value.items.filter(repo => repo.id != id)
  }

  onMounted(() => {
    getSaveRepo(param)
  })

  return {
    searchRepo,
    addRepo,
    getSaveRepo,
    deleteSavedRepo,
    repositories,
    savedRepositories
  }
}