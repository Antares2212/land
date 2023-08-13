<template>
  <div class="dropdown">
    <select :id="id" v-model="selectedValue" @change="handleChange" autocomplete ="off">
      <option value="" :key="label" disabled selected>{{ label }}</option>
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const selectedValue = ref(props.value)

    const handleChange = () => {
      emit('update:modelValue', selectedValue.value)
    }

    return {
      selectedValue,
      handleChange
    }
  }
}
</script>
<style scoped lang="scss">
  select {
    appearance: none;
    outline: 10px red;
    border: 0;
    box-shadow: none;
    flex: 1;
    padding: 0 1em;
    color: #fff;
    background-color: #2c3e50;
    background-image: none;
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
  }
  
  .dropdown {
    position: relative;
    display: flex;
    width: 15em;
    height: 3em;
    border-radius: .25em;
    overflow: hidden;

    &::after {
      content: '\25BC';
      position: absolute;
      top: 0;
      right: 0;
      padding: 1em;
      background-color: #34495e;
      transition: .25s all ease;
      pointer-events: none;
    }

    &:hover::after {
      color: #58DBC7;
    }
  }
</style>