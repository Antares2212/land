<template>
  <div class="item">
    <div class="left">
      <div class="date">
        Создан: <br>
        {{ dateWork(data.created_at) }}
        <br><br>
        Обновлен: <br>
        {{ dateWork(data.updated_at) }}
      </div>
      <button v-if="flag == 'saved'" class="delete" @click="deleteSavedRepo(data.id)">
        Удалить
      </button>
      <button v-else class="add" @click="addRepo(data.owner.login, data.name)">
        Сохранить
      </button>
    </div>
    <div class="right">
        <a class="title" :href="data.html_url" target="_blank">
            {{ data.name }} 
            <v-icon scale="0.8" name="bi-arrow-up-right"/>
        </a>
        <div class="description">
            {{ data.description }}
        </div>
        <div class="stack">
            <div class="skill">
                {{ data.language === null ? 'Other' : data.language }}
            </div>
        </div>
        <div class="bottom">
            <a :href="data.owner.html_url" target="_blank">
                Ссылка на Git
            </a>    
            <span>
                {{ data.stargazers_count }}
                <v-icon name="bi-star-fill"/>
            </span>
        </div>
    </div>
  </div>
</template>
<script>
import { dateWork, getDate } from '@/helpers/dateWork';
import { useGit } from '@/hooks/useGit';
export default {
    props: ['data', 'flag'],
    setup: () => {
      const { addRepo, deleteSavedRepo} = useGit()

      return { getDate, dateWork, addRepo, deleteSavedRepo}
    }
}
</script>
<style lang="scss">
  .item {
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    padding: 10px 15px;
    border-radius: 10px;
    transition: all .5s ease;
    cursor: pointer;

    &:hover {
      background-color: #6b6b6b36;
      box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.6);
    }

    &:hover .title {
      color: #58DBC7;
    }

    &:hover .title .ov-icon {
      transform: translate(50%, -50%);
    }

    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #ffffff34;
      font-size: 14px;
    }

    .right {
      display: grid;
      gap: 15px;
      grid-template-rows: auto;
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      & span {
        color: #58DBC7;
      }

      a {
        text-decoration: underline;

        &:hover {
          color: $second-color;
        }
      }
    }

    .title {
      font-size: 24px;
      color: #fff;

      & .ov-icon {
        margin-left: 5px;
        transition: all .5s ease;
      }
    }

    .description {
      font-size: 16px;
      text-align: justify;
      line-height: 1.3em;
    }

    .stack {
      display: flex;
      align-items: center;
    } 

    .skill {
      margin: 0 10px;
      padding: 5px 10px;
      color: #58DBC7;
      background-color: #122B39;
      border-radius: 25px;

      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 459px) {
    .item {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid $text-color;
      border-radius: 0;
      margin-bottom: 10px;

      .left {
        order: 2;
      }

      .date {
        display: none;
      }

      .right {
        order: 1;
      }

      .bottom {
        a {
          color: $second-color;
        }
      }
    }
  }
</style>