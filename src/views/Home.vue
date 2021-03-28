<template>
  <div class="v-home">
    <div>
      <Header @getSearchValue="getSearchValue"></Header>
      <Table :searchedElement="searchValue"></Table>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const Header = () => import("@/components/Header.vue");
const Table = () => import("@/components/Table.vue");
const Footer = () => import("@/views/Footer.vue");

@Component({
  components: {
    Header,
    Table,
    Footer
  }
})
export default class Home extends Vue {
  searchValue = "";

  getSearchValue(value: string) {
    this.searchValue = value;
  }
}
</script>

<style lang="scss">
.v-home {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
