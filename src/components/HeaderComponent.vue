<template>
  <header>
    <nav>
      <router-link class="logo" to="/">
        <img alt="Ranek" src="@/assets/ranek.svg" />
      </router-link>
      <router-link v-if="$store.state.login" class="btn" to="/login"
        >{{ name }}
      </router-link>
      <router-link v-else class="btn" to="/login">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  computed: {
    name() {
      return this.$store.state.user.nome.replace(/ .*/, "");
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.2);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>
