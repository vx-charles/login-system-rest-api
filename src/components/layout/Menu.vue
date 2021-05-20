<template>
  <nav class="menu">
    <div class="user-info">
      <img src="../../../src/assets/images/fotoUsuario.jpg" alt="Foto usuário">
      <h2><small>Olá,</small> {{ user.name }}</h2>
    </div>
    <ul v-if="user.perfil === 'Administrador'" v-bind:class="{active: activeMenu}">
      <router-link :to="{ name: 'home' }">
        <li>
          <span class="material-icons">home</span>
          Home
        </li>
      </router-link>
      <router-link :to="{ name: 'config-user', params: {perfil: user.perfil} }">
        <li>
          <span class="material-icons">settings</span>
          Gerenciar usuários
        </li>
      </router-link>
      <button class="btn-logout" v-on:click="signOut()">
        <li>
          <i class="material-icons">exit_to_app</i> Sair
        </li>
      </button>
    </ul>
    <ul v-else v-bind:class="{active: activeMenu}">
      <router-link :to="{ name: 'home' }">
        <li>
          <span class="material-icons">home</span>
          Home
        </li>
      </router-link>
      <button class="btn-logout" v-on:click="signOut()">
        <li>
          <i class="material-icons">exit_to_app</i> Sair
        </li>
      </button>
    </ul>
    <div class="hamburger" v-if="activeMenu" v-on:click="toggleHamburger" v-bind:class="{active: activeMenu}">
      <span class="material-icons">cancel</span>
    </div>
    <div v-else class="hamburger" v-on:click="toggleHamburger" v-bind:class="{active: activeMenu}">
      <span class="material-icons">menu</span>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Menu',
  data: () => (
    { activeMenu: false }
  ),
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['ActionSignOut']),
    signOut () {
      this.ActionSignOut()
      this.$router.push({ name: 'login' })
    },
    toggleHamburger () {
      this.activeMenu = !this.activeMenu
    }
  }
}
</script>
