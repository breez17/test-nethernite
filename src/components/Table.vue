<template>
  <div class="c-table">
    <div id="my-table" class="c-table__holder">
      <div class="c-table__holder-header">
        <div
          class="c-table__holder-header-item"
          :key="index"
          v-for="(field, index) of fields"
        >
          {{ field.key }}
        </div>
      </div>
      <div class="c-table__holder-body">
        <template v-for="(packageItem, index) of handleSearch">
          <div
            v-if="packageItem"
            class="c-table__holder-body-item"
            :key="index"
            @click="openInfo(packageItem)"
          >
            <div class="c-table__holder-body-item-value">
              {{ packageItem.name }}
            </div>
            <div class="c-table__holder-body-item-value">
              {{ packageItem.type }}
            </div>
            <div class="c-table__holder-body-item-value">
              {{ packageItem.hits }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="c-table__pagination" v-show="rows > 2">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
    <Modal
      @closeModal="closeInfo"
      :isHaveCloseBtn="true"
      width="45vw"
      addClass="m-info"
      v-show="isShow"
    >
      <template v-slot:header>
        <div class="m-info__header">
          <h2>{{ activePackage.name }}</h2>
        </div>
      </template>
      <template v-slot:body>
        <div class="m-info__body">
          <div class="m-info__body-item">
            <div class="m-info__body-item-title">
              Hits:
            </div>
            <div class="m-info__body-item-value">
              {{ activePackage.hits }}
            </div>
          </div>
          <div class="m-info__body-item">
            <div class="m-info__body-item-title">Type:</div>
            <div class="m-info__body-item-value">
              {{ activePackage.type }}
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PackagesDto } from "@/dto/packages.dto";
const Modal = () => import("@/hocs/Modal");
@Component({
  components: {
    Modal
  }
})
export default class Table extends Vue {
  @Prop({ default: "" }) searchedElement: string | any;
  fields = [
    {
      key: "hits",
      sortable: true
    },
    {
      key: "name",
      sortable: false
    },
    {
      key: "type",
      sortable: true
    }
  ];
  isShow = false;
  perPage = 10;
  currentPage = 1;
  activePackage = {};
  packages: PackagesDto | any = [];

  get rows() {
    let packages = this.packages.length;
    if (this.searchedElement !== "") {
      packages = this.handleSearch.filter((x: any) => {
        return x !== undefined && x !== null;
      });
      return packages.length;
    }

    return packages;
  }

  get handleSearch() {
    if (this.searchedElement === "" && this.packages !== null) {
      const start = this.currentPage * this.perPage,
        end = start + this.perPage;
      return this.packages.slice(start, end);
    }
    if (this.packages === []) {
      return [];
    } else {
      return this.packages.map((item: any) => {
        if (
          item.name.toLowerCase().search(this.searchedElement.toLowerCase()) !==
          -1
        ) {
          return item;
        }
      });
    }
  }

  openInfo(packageItem: any) {
    this.activePackage = packageItem;
    this.isShow = true;
  }

  closeInfo() {
    this.isShow = false;
  }

  async getPackages() {
    try {
      this.packages = await this.$store.dispatch("getPackages");
    } catch (e) {
      console.log(e);
    }
  }

  created() {
    this.getPackages();
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/color-variables.scss";
@import "@/assets/styles/fonts-variables.scss";
@import "@/assets/styles/modals/modal-info.scss";
.c-table {
  margin: 20px auto;
  width: 70%;

  &__pagination {
    margin: 50px auto;
    display: flex;
    justify-content: center;
  }

  &__holder {
    padding: 10px 15px;
    &-header {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 10px 15px;
      text-transform: uppercase;
      font-weight: 700;
      font-family: $bold;
      margin-bottom: 20px;
      box-shadow: 1px 2px 5px $black;
    }

    &-body {
      &-item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        color: $white;
        padding: 10px 15px;
        margin-bottom: 25px;
        background: $lightBlue;
        border-radius: 10px;
        transition: all 0.3s;
        cursor: pointer;
        &:last-child {
          margin: 0;
        }

        &:hover {
          box-shadow: 1px 2px 5px $black;
        }
      }
    }
  }
}

@media only screen and (max-width: 1100px) {
  .c-table {
    width: 95%;
  }
}

@media only screen and (max-width: 450px) {
  .c-table {
    &__holder {
      font-size: 10px;
    }
  }
}
</style>
