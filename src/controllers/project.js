const db = require('../helpers/db')
const { 
  getDataProjectModel, 
  getDataProjectByIDModel,
  createProjectModel
 } = require('../models/project')

module.exports = {
  getDataProject: (req, res) => {
    let { page, limit, search } = req.query
    
    let searchKey = ''
    let searchValue = ''
  
    if (typeof search == 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'name_project'
      searchValue = search||''
    }
  
    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }
    
    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }
  
    const offset = (page-1) * limit

    getDataProjectModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List project',
          data: result
        })
      } else {
        res.send({
          success: true,
          message: 'There is no item on list'
        })
      }
    })  
  },

  getDataProjectByID: (req, res) => {
    const { id } = req.params
    getDataProjectByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data project id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data project id ${id} not found`
        })
      }
    })
  },
  createProject: async (req, res) => {
    try {
      const { name, description, price, duration } = req.body
      const setData = {
        name_project: name,
        description,
        price,
        duration,
        image: req.file === undefined ? '' : req.file.filename
      }
      const resultCreate = await createProjectModel(setData)
      console.log(resultCreate);
      res.status(200).send({
        success: true,
        message: 'Product Created',
        data: setData
      })
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: 'Bad Request!'
      })
    }
  }
}