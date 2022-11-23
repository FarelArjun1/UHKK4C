const express = require('express')
const user = require('../controllers/user')
const router = express.Router()

const usercontroller = require('../controllers/user')

router.get('/users', usercontroller.index)

router.get('/user/:id', usercontroller.show)

  router.post('/user', usercontroller.store)

  router.put('/user/:id', usercontroller.update)

  router.delete('/user/:id', usercontroller.delete)

  router.delete('/user/:id', (req, res) => {
    const id = req.params.id
    users =  users.filter(user => user.id != id)

    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message: "Data berhasil dihapus"
    })
  })

  module.exports = router