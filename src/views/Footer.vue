<template>
  <div class="v-footer">
    <div class="v-footer__wrapper">
      <a
        class="v-footer__wrapper-link"
        href="https://github.com/breez17"
        target="_blank"
        >Github</a
      >
      <a
        class="v-footer__wrapper-link"
        href="https://www.linkedin.com/in/bohdan-pronkurov-9a6801187/"
        target="_blank"
        >Bohdan</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Footer extends Vue {}
</script>

<style lang="scss">
@import "@/assets/styles/color-variables.scss";

.v-footer {
  padding: 50px 0;
	margin-top: 50px;
  background: $lightBlue;
  color: $white;
  &__wrapper {
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &-link {
      position: relative;
      display: inline-block;
      font-size: 2em;
      font-weight: 800;
      color: royalblue;
      overflow: hidden;
      background: linear-gradient(
        to right,
        midnightblue,
        midnightblue 50%,
        #ffffff 50%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 275ms ease;
      text-decoration: none; // text decorations are clipped in WebKit browsers
      &:hover {
        background-position: 0 100%;
      }
    }
  }
}


@media only screen and (max-width: 450px) {
	.v-footer__wrapper-link {
		font-size: 16px;
	}
}
</style>
