<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input id="email" v-model="login.email" name="email" type="email" />
      <label for="password">Senha</label>
      <input
        id="password"
        v-model="login.password"
        name="password"
        type="password"
      />
      <button class="btn" @click.prevent="loginUser">Logar</button>
    </form>
    <p class="lostPassword">
      <a href="/" target="_blank">Esqueceu a senha, clique aqui</a>
    </p>
    <create-login-component></create-login-component>
  </section>
</template>

<script>
import CreateLoginComponent from "@/components/CreateLoginComponent.vue";

export default {
  name: "LoginView",
  components: {
    CreateLoginComponent,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      this.$store.dispatch("getUser", this.login.email);
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #8877ee;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.lostPassword {
  text-align: center;
  margin: 20px auto 0 auto;
}

.lostPassword a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
