<template>
  <div id="user-adm">
    <div class="content">
      <div class="page-title">Gerenciamento de usuários</div>

      <div class="add-user">
        <button type="button" @click="$modal.show('form-register')">
          <span class="material-icons">add_box</span>
          Cadastrar
        </button>
      </div>

      <!-- LISTA DE USUÁRIOS -->
      <div class="scroll-table-mobile">
        <table class="user-table">
          <thead>
            <th>Nome do usuário</th>
            <th>Nível de acesso</th>
            <th>Alterar</th>
            <th>Excluir</th>
          </thead>
          <tbody>
            <tr :key="item.id" v-for="item in userlist" v-bind:class="{bgGray: item.id % 2 !== 0}">
              <td>{{ item.name }}</td>
              <td>{{ item.perfil }}</td>
              <td>
                <button type="button" class="user-action edit">
                  <!-- <span class="material-icons" @click="$modal.show('form-change')">edit</span> -->
                  <span class="material-icons" @click="listaUser(item.id)">edit</span>
                </button>
              </td>
              <td>
                <button type="button" class="user-action delete">
                  <span class="material-icons" @click="$modal.show('exclude')">delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- FORMULÁRIO DE CADASTRO -->
      <modal name="form-register" :width="500" :height="387" :adaptive="true">
        <div class="form-register">
          <div class="title-form">Cadastrar usuário</div>
          <form autocomplete="false">
            <input type="text" value="" placeholder="Nome do usuário">
            <input type="email" value="" placeholder="E-mail">
            <select name="nivel_acesso">
              <option value="" disabled selected>Selecione o perfil do usuário:</option>
              <option value="padrão">Padrão</option>
              <option value="administrador">Administrador</option>
            </select>
            <input type="password" value="" placeholder="Senha">
          </form>
          <div class="form-btn">
            <button @click="$modal.hide('form-change')">
              <span class="material-icons">done</span> Cadastrar
            </button>
            <button @click="$modal.hide('form-register')">
              <span class="material-icons">cancel</span> Cancelar
            </button>
          </div>
        </div>
      </modal>

      <!-- FORMULÁRIO DE ALTERAÇÃO -->
      <modal name="form-change" :key="item.id" v-for="item in userSel" :width="500" :height="327" :adaptive="true">
        <div class="form-change">
          <div class="title-form">Alterar usuário</div>
          <form autocomplete="false">
            <input type="email" value="" v-model="item.email" placeholder="E-mail">
            <select name="access_level">
              <option value="" disabled selected>Selecione o perfil do usuário:</option>
              <option value="padrão">Padrão</option>
              <option value="administrador">Administrador</option>
            </select>
            <input type="password" value="" v-model="item.password" placeholder="Senha">
          </form>
          <div class="form-btn">
            <button @click="$modal.hide('form-change')">
              <span class="material-icons">done</span> Alterar
            </button>
            <button @click="$modal.hide('form-change')">
              <span class="material-icons">cancel</span> Cancelar
            </button>
          </div>
        </div>
      </modal>

      <!-- MODAL DE EXCLUSÃO -->
      <modal name="exclude" :width="500" :height="130" :adaptive="true">
        <div class="form-exclude">
          <div class="exclude-msg">
            Deseja excluir este usuário?
          </div>
          <div class="form-btn">
            <button @click="$modal.hide('exclude')">
              <span class="material-icons">done</span> Sim
            </button>
            <button @click="$modal.hide('exclude')">
              <span class="material-icons">cancel</span> Não
            </button>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'config-user',
  data () {
    return { userSel: null }
  },
  computed: {
    ...mapState('userlist', ['userlist'])
  },
  methods: {
    ...mapActions('userlist', ['ActionUserList']),
    listaUser (id) {
      this.userSel = this.$store.state.userlist.userlist.filter(i => i.id === id)
      this.$modal.show('form-change')
    }
  },
  mounted () {
    this.ActionUserList()
  }
}
</script>

<style lang="scss" src="../../assets/scss/userConfig.scss" scoped />
