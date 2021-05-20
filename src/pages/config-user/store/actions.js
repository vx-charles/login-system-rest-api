import services from '@/http'
import * as types from './mutation-types'

export const ActionUserList = ({ commit }) => (
  services.userlist.userList().then(res => {
    commit(types.SET_USERLIST, res.body.users)
  })
)
