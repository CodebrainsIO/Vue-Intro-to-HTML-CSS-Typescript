<template>
  <a-col :span="8">
    <a-card :title="pricing.price">
      <ul>
        <li v-for="feature in pricing.features" v-bind:key="feature">
          {{ feature }}
        </li>
      </ul>
      <a-button type="primary">
        {{ pricing.signUpBtnText }}
      </a-button>
    </a-card>
  </a-col>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PriceModel from "../models/PriceModel";
@Options({
  props: {
    pricing: PriceModel
  }
})
export default class PriceCard extends Vue {
  pricing!: PriceModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
