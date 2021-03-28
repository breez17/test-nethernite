<template>
  <div class="c-header">
    <div class="c-header__holder">
      <router-link to="/" class="c-header__holder-title">Nether-Test</router-link>
    </div>
    <div class="c-header__wrapper-search">
      <b-form-input @input="setSearch" :id="`type-search`" type="search" class="c-header__wrapper-search-item" placeholder="Search...">
      </b-form-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Header extends Vue {
  setSearch(search: string) {
    this.$emit("getSearchValue", search );
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/color-variables.scss";
.c-header {
  background: $lightBlue;
  padding: 40px 10%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__holder {
    width: max-content;
    border: 1px solid $white;
    padding: 12px 15px;
    border-radius: 10px;
    transition: all 0.3s;

    &:hover {
      background: $white;
    }
    &-title {
      color: $white;
      text-transform: uppercase;
      font-size: 18px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        text-decoration: none;
        color: $lightBlue;
      }
    }
  }
  &__wrapper {
    &-search {
      width: 70%;
    }
  }
}

@media only screen and (max-width: 1100px) {
  .c-header {
    padding: 40px;
  }
}

@media only screen and (max-width: 1100px) {
  .c-header {
    &__holder {
      display: none;
    }
    &__wrapper-search {
      width: 100%;
    }
  }
}
</style>
