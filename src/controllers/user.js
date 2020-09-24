const { postUserModel, checkUserModel } = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv')

module.exports = {
  registerUser: async (request, response) => {
    const { user_name, user_email, user_password } = request.body
    const salt = bcrypt.genSaltSync(10)
    const encryptPassword = bcrypt.hashSync(user_password, salt)
    // Pengkondisian untuk mengecheck Email
    const setData = {
      user_name,
      user_email,
      user_password: encryptPassword,
      user_role: 1,
      user_status: 0,
      created_at: new Date()
    }
    try {
      const result = await postUserModel(setData)
      console.log(result);
      response.send({
        success: true,
        message: 'Succes Register User!',
        data: result
      })
    } catch (error) {
      console.log(error);
      response.status(400).send({
        success: false,
        message: 'Bad Request'
      })
    }
  },
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body
      const checkDataUser = await checkUserModel(user_email)
      if (checkDataUser.length >= 1) {
        const checkPassword = bcrypt.compareSync(user_password, checkDataUser[0].user_password)
        if (checkPassword) {
          const { user_id, user_name, user_email, user_role, user_status } = checkDataUser[0]
          let payload = {
            user_id,
            user_name,
            user_email,
            user_role,
            user_status,
          }
          const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' })
          payload = { ...payload, token}
          response.send({
            success: true,
            message: 'Succes Login!',
            data: payload
          })
        } else {
          response.status(400).send({
            success: false,
            message: 'Wrong Password!'
          })
        }
      } else {
        response.status(400).send({
          success: false,
          message: 'Email/Account not registered!'
        })
      }
    } catch (error) {
      console.log(error);
      response.status(400).send({
        success: false,
        message: 'Bad Request'
      })
    }
  }
}