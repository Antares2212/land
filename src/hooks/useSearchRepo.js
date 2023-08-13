import { onMounted } from "vue"

export const useSearchRepo = (param, callback) => {

  const updatePage = (page) => {
    param.page = page
    callback(param)
  }

  const handleSubmit = (e = '') => {
    param.q = e.target.search.value
    param.sort = e.target.sort.value
    param.order = e.target.order.value
    param.page = 1
    callback(param)
  }

  onMounted(() => {
    if (param.q === '') {
      param.q = 'pomodoro'
    } 
    callback(param)
  })

  return {
    updatePage,
    handleSubmit,
    param
  }
}