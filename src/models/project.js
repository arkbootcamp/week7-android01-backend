const db = require('../helpers/db')

module.exports = {
  getDataProjectModel: (searchKey, searchValue, limit, offset, cb) => {
    db.query(`SELECT * FROM project WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
      if (!err) {
        cb(result)
      } else {
        cb(err)
      }
    })
  },
  getDataProjectByIDModel: (id, cb) => {
    db.query(`SELECT * FROM project WHERE id_project = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createProjectModel: (setData) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO project SET ?'
      db.query(query, setData, (err, result, _fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}