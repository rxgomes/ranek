<template>
  <section>
    <div v-if="product" class="product">
      <ul v-if="product.fotos" class="picture">
        <li v-for="(pic, index) in product.fotos" :key="index">
          <img :src="pic.src" :alt="pic.titulo" />
        </li>
      </ul>
      <div classs="info">
        <h1>{{ product.nome }}</h1>
        <p class="price">{{ $filters.formatPrice(product.preco) }}</p>
        <p class="description">{{ product.descricao }}</p>
        <button v-if="product.vendido === 'false'" class="btn">Comprar</button>
        <button v-else class="btn" disabled>Produto Vendido</button>
      </div>
    </div>
    <loading-component v-else />
  </section>
</template>

<script>
import { api } from "@/services.js";
import LoadingComponent from "./LoadingComponent.vue";

export default {
  components: { LoadingComponent },
  name: "ProductDetails",
  props: ["id"],

  data() {
    return {
      product: null,
    };
  },
  methods: {
    getProduct() {
      api.get(`/produto/${this.id}`).then((r) => {
        this.product = r.data;
      });
      console.log(this.product);
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style  scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>

