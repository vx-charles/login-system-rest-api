import * as types from './mutation-types'

export default {
  [types.SET_USERLIST] (state, payload) {
    state.userlist = payload
  }
}
