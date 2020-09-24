const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const projectRouter = require('./src/routes/project')
const usersRouter = require('./src/routes/user')
const db = require('./src/helpers/db')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use('/project', projectRouter)
app.use('/users', usersRouter)
app.use(cors())
app.use(morgan('dev'))

app.use('/uploads', express.static('./uploads'))

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.get('/', (_request, response) => {
  response.send({
    success: true,
    status: 200,
    message: 'Backend Android01 Arkademy!'
  })
})

app.put('/project/:id', (req, res) => {
  const idProject = req.params.id
  const { name, description, price, duration } = req.body
  if (name.trim() && description.trim() && price.trim() && duration.trim()) {
    db.query(`SELECT * FROM project WHERE id_project = ${idProject}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE project SET name_project='${name}', description='${description}', price=${price}, duration='${duration}' 
        WHERE id_project = ${idProject}`, (_err, result, _fields) => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Project with id ${idProject} has been updated`,
            })
          } else {
            res.send({
              success: false,
              message: 'Failed to update data!'
            })
          }
        })
      } else {
        res.send({
          success: false,
          message: `Project with id ${idProject} not found!`
        })
      }
    })
  } else {
    res.send({
      success: false,
      message: 'All field must be filled!'
    })
  }
})

app.patch('/project/:id', (req, res) => {
  const idProject = req.params.id
  const { name_project = '', description = '', price = '', duration = '' } = req.body

  if (name_project.trim() || description.trim() || price.trim() || duration.trim()) { 
    db.query(`SELECT * FROM project WHERE id_project = ${idProject}`, (_err, result, _field) => {
      if (result.length) {
        const data = Object.entries(req.body).map(item => {
          return parseInt(item[1]) > 0 ? `${item[0]}=${item[1]}` : `${item[0]}='${item[1]}'`
          // return `${item[0]}=${item[1]}`
        })
        console.log(data)
        db.query(`UPDATE project SET ${data} WHERE id_project = ${idProject}`, (err, result, _field) => {
          console.log(err)
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Project with id ${idProject} has been updated`
            })
          } else {
            res.send({
              success: false,
              message: 'Failed to update data!'
            })
          }
        })
      } else {
        res.send({
          success: false,
          message: 'Data project not found!'
        })
      }
    })
  } else {
    res.send({
      success: false,
      message: 'Error!'
    })
  }
})

app.delete('/project/:id', (req, res) => {
  const { id } = req.params
  db.query(`SELECT * FROM project WHERE id_project = ${id}`, (_err, result, _field) => {
    if (result.length) {
      db.query(`DELETE FROM project WHERE id_project = ${id}`, (_err, result, _field) => {
        console.log(result)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item project id ${id} has been deleted`
          })
        } else {
          res.send({
            success: false,
            message: 'Failed to delete!'
          })
        }
      })
    } else {
      res.send({
        success: false,
        message: 'Data project not found!'
      })
    }
  })
})

app.listen(process.env.PORT, () => {
  console.log(`This server is running on port ${process.env.PORT}!`)
})