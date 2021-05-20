<template>
  <div class="login">
    <form @submit.prevent="submit()">
      <div class="login-page">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="email"
                v-model="form.email"
                class="form-control"
                placeholder="E-mail"
              >
            </div>
            <div class="form-group">
              <input
                required
                type="password"
                placeholder="Senha"
                class="form-control"
                v-model="form.password"
              >
            </div>

            <button class="btn btn-primary w-100">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data: () => ({
    form: {
      email: 'usuariocomum@teste.com.br',
      password: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)

        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível fazer login')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // Small tablets and large smartphones (landscape view)
  $screen-sm-min: 576px;
  // Small tablets (portrait view)
  $screen-md-min: 768px;
  // Tablets and small desktops
  $screen-lg-min: 992px;
  // Large tablets and desktops
  $screen-xl-min: 1200px;

  // Small devices
  @mixin sm {
    @media (max-width: #{$screen-sm-min}) {
      @content;
    }
  }

  // Medium devices
  @mixin md {
    @media (max-width: #{$screen-md-min}) {
      @content;
    }
  }

  // Large devices
  @mixin lg {
    @media (max-width: #{$screen-lg-min}) {
      @content;
    }
  }

  // Extra large devices
  @mixin xl {
    @media (max-width: #{$screen-xl-min}) {
      @content;
    }
  }

  .login-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

    .card {
      width: 500px;

      @include md {
        width: 100%;
      }
    }
  }
</style>
