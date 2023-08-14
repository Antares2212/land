<template>
  <form class="search" @submit.prevent="handleSubmit">
    <div class="body">
      <input type="text" name="search" class="input" placeholder="Type to Search..." autocomplete="off">
      <button type="submit" class="btn">
        <v-icon scale="1.4" name="bi-search"/>
      </button>
    </div>
    <div class="options">
      <slot></slot>
    </div>
  </form>
</template>
  
<script>
export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">

.search {
  .options {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .body {
    width: fit-content;
    height: fit-content;
    position: relative;
    margin-bottom: 30px;
  }

  .input{
    width: 320px;
    height: 50px;
    border-style: none;
    padding: 15px;
    font-size: 18px;
    outline: none;
    border-radius: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    background: #fff;
    padding-right: 40px;
    color:#000;
    box-shadow:  4px 4px 6px 0 rgba(255, 255, 255, .3),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
                inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
                inset 4px 4px 6px 0 rgba(0, 0, 0, .2);

    &::placeholder {
      color:rgba(255,255,255,.5);
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 100;
    }
  }

  .btn {
    width: 50px;
    height: 50px;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color:#fff ;
    background-color: #000;
    pointer-events: painted;  
    transition: all .5s ease;

    &:hover {
      color: #58DBC7;
    }
  }

  @media (max-width: 459px) {
    .options {
      display: flex;
      flex-direction: column;
    }

    .body {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .btn {
      right: 30px;
    }
  }
}

</style>