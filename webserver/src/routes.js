import AuthController from './controllers/AuthController'

export default function (App) {
  App.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to Node.js API 😁' })
  })

  App.get('/login', AuthController.userList)
  App.post('/login', AuthController.authenticate)
  App.get('/load-session', AuthController.validateSession, AuthController.loadSession)

}
