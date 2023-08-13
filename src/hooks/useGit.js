import { request } from "@/helpers/api"
import { ref } from "vue"

export const useGit = (loading) => {
  const repositories = ref([])
  const savedRepositories = ref([])

  const getSaveRepo = async (params) => {
    const searchParams = new URLSearchParams()

    Object.keys(params).forEach(key => {
      searchParams.append(key, params[key])
    })

    try {
      await request('GET', `/repos/saved/?${searchParams.toString()}`, {}, {}, loading)
        .then(data => savedRepositories.value = data)
    } catch (error) {
      console.error(error)
    }
  }

  const addRepo = async (name, repo) => {
    try {
      await request('GET', '/repos/save/' + name + '/' + repo)
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
        .then(data => repositories.value = data)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteSavedRepo = async (id) => {
    try {
      await request('DELETE', `/repos/saved/delete/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    searchRepo,
    addRepo,
    getSaveRepo,
    deleteSavedRepo,
    repositories,
    savedRepositories
  }
}