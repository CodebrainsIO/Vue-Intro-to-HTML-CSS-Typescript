<template>
  <div style=" padding: 20px;">
    <a-row :gutter="16">
      <PriceCard :pricing="price1" />
      <PriceCard :pricing="price2" />
      <PriceCard :pricing="price3" />
    </a-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PriceModel from "../models/PriceModel";
import PriceCard from "@/components/PriceCard.vue";

@Options({
  components: {
    PriceCard
  }
})
export default class About extends Vue {
  price1: PriceModel = new PriceModel(
    "$0 / mo",
    ["Completely Free", "50GB of Storage", "Public Spaces"],
    "Sign Up Now!"
  );

  price2: PriceModel = new PriceModel(
    "$20 / mo",
    ["1TB of Storage", " Private Spaces", "Support withing 24 hours"],
    "Sign Up Now!"
  );

  price3: PriceModel = new PriceModel(
    "$20 / mo",
    ["0TB of Storage", " Private Spaces", "Support withing 8 hours"],
    "Contact Us!"
  );
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
