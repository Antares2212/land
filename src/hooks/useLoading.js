import { ref } from 'vue';

export const useLoading = () => {
  const isLoading = ref(false);

  const setLoading = (loading) => {
    isLoading.value = loading;
  };

  return {
    isLoading,
    setLoading,
  };
};