<template>
  <div class="paggination">
    <button 
      @click="updatePage(param.page - 1)" 
      :disabled="param.page === 1">
      <v-icon class="arrow" scale="2" name="bi-arrow-left-square"/>
    </button>

    <span class="numbers">
      <div v-for="page in Math.max(param.page - 2, 1) + 4" :key="page">
        <div 
          class="item" 
          :class="{ active: param.page === page, disabled: disabled }" 
          v-if="page >= Math.max(param.page - 2, 1) && page <= Math.min(param.page + 2, 100)"
          @click="disabled ? null : updatePage(page)">
          {{ page }}
        </div>
      </div>
    </span>

    <button 
      @click="updatePage(param.page + 1)" 
      :disabled="dataList.length < param.per_page">
      <v-icon class="arrow" scale="2" name="bi-arrow-right-square"/>
    </button>
    
  </div>
</template>
<script>
export default {
  props: {
    updatePage: {
      type: Function,
      require: true
    },
    param: {
      type: Object,
      default() {
        return {
          q: 'pomodoro',
          page: 1,
          per_page: 10,
        }
      }
    },
    dataList: {
      type: Object,
      default() {
        return {
          
        }
      }
    },
    totalPage: {
      type: Number
    }
  },
  data() {
    return {
      disabled: false,
    };
  },
  watch: {
    dataList(_, oldVal) {
      if (oldVal.length > this.param.per_page) {
        this.disabled = true
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .paggination {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .numbers {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      gap: 10px;
    }

    .item {
      display: flex;
      padding: 10px 20px;
      border: 2px solid silver;
      cursor: pointer;
      transition: all .5s ease;

      &:hover {
        background-color: $second-color-fade;
        color: #0F172A;
      }

      &.active {
        color: #0F172A;
        border-color: #0F172A;
        background-color: $second-color;
      }
    }

    .arrow {
      color: #fff;
      transition: all .5s ease;
      cursor: pointer;

      &:hover {
        color: $second-color;
      }
    }

    button {
      background-color: transparent;
      outline: none;
      border: none;

      &:disabled .arrow {
        cursor: inherit;
        color: #ffffff96;
      }
    }
  }

  
</style>