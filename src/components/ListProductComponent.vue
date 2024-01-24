<template>
  <section class="product-container">
    <transition mode="out-in">
      <div v-if="products && products.length" class="products" key="products11">
        <div class="product" v-for="(product, index) in products" :key="index">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img
              v-if="product.fotos"
              :src="product.fotos[0].src"
              :alt="product.fotos[0].titulo"
            />
            <h2 class="title">{{ product.nome }}</h2>
            <p class="description">{{ product.descricao }}</p>
            <p class="price">{{ $filters.formatPrice(product.preco) }}</p>
          </router-link>
        </div>
        <PaginationComponent
          :totalItems="totalItems"
          :itemsPerPage="itemsPerPage"
        />
      </div>
      <div
        class="not-found"
        v-else-if="products && products.length == 0"
        key="hot-found"
      >
        <p>Nenhum item foi localizado</p>
      </div>
      <loading-component v-else key="loading" />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mountQueryString } from "@/helpers";
import PaginationComponent from "./PaginationComponent.vue";

export default {
  name: "ListProductComponent",
  components: {
    PaginationComponent,
  },
  data() {
    return {
      products: [],
      itemsPerPage: 9,
      totalItems: 0,
    };
  },
  computed: {
    url() {
      const query = mountQueryString(this.$route.query);
      return `/produto?_limit=${this.itemsPerPage}${query}`;
    },
  },
  watch: {
    url: {
      handler() {
        this.getProducts();
      },
    },
  },
  methods: {
    getProducts() {
      this.products = null;
      setTimeout(() => {
        api.get(this.url).then((r) => {
          this.products = r.data;
          this.totalItems = Number(r.headers["x-total-count"]);
        });
      }, 1500);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.product-container {
  max-width: 1000px;
  margin: 0 auto;
}
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #e80;
}

.not-found {
  text-align: center;
}
</style>