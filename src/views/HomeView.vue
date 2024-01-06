<template>
  <section>
    <h1>Compre ou Venda</h1>
    <SearchProductComponent />
    <ListProductComponent />
  </section>
</template>

<script>
import SearchProductComponent from "@/components/SearchProductComponent.vue";
import ListProductComponent from "@/components/ListProductComponent.vue";

export default {
  name: "HomeView",
  components: {
    SearchProductComponent,
    ListProductComponent,
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
