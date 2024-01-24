<template>
  <ul v-if="totalPage > 1">
    <router-link :to="{ query: query(1) }"> &lt;&lt; </router-link>
    <li v-for="page in pages" :key="page">
      <router-link
        :to="{ query: query(page) }"
        :class="{ true: page === Number(this.$route.query._page) }"
        >{{ page }}</router-link
      >
    </li>
    <router-link :to="{ query: query(totalPage) }">&gt;&gt;</router-link>
  </ul>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    totalItems: {
      type: Number,
      default: 1,
    },
    itemsPerPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pages() {
      const currrentPage = Number(this.$route.query._page);
      const rangePage = 5;
      const offset = Math.ceil(rangePage / 2);
      const totalPages = this.totalPage;
      const pagesShow = [];

      for (let i = 1; i <= totalPages; i++) {
        pagesShow.push(i);
      }

      pagesShow.splice(0, currrentPage - offset);
      pagesShow.splice(rangePage, totalPages);

      return pagesShow;
    },
    totalPage() {
      const total = this.totalItems / this.itemsPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
  methods: {
    query(page) {
      console.log(isNaN(Number(this.$route.query._page)));
      return {
        ...this.$route.query,
        _page: page,
      };
    },
  },
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.true,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>