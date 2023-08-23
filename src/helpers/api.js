export const BASE_URL = 'http://localhost:5000'

const handleResponse = async (response) => {
  const responseData = await response.json()
  return {
    status: response.status,
    data: responseData,
  }
}

export const request = async (method, url, options = {}, data = {}, loading = Function) => {

  method === ('GET' || 'DELETE') ? 
    options = {
      method: method
    }
    :
    options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

  loading && loading(true)

  try {
    const response = await fetch(`${BASE_URL}${url}`, options)
    const { status, data: responseData } = await handleResponse(response)

    if (status >= 200 && status <= 299) {
      loading(false)
      return responseData
    } else {
      const errorMessage = status ? response.statusText : 'Ошибка при выполнении запроса'
      throw new Error(errorMessage)
    }
  } catch (error) {
    console.error(error)
    loading(false)
    throw error
  }
}