const User = require('../models').User;

let getAllUser = (req, res) => {
  User.findAll().then(dataUser => {
    res.send(dataUser);
  })
  .catch(err => {
    res.send(err);
  });
}

let getById = (req, res) => {
  User.findById(req.params.id).then(dataUser => {
    res.send(dataUser);
  })
  .catch(err => {
    res.send(err);
  });
}

let deleteById = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    },
  }).then(dataUser => {
    res.send('user has been deleted');
  })
  .catch(err => {
    res.send(err);
  });
}

let addUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let isadmin = req.body.isadmin;
  User.create({
    username: username,
    password: password,
    isadmin: isadmin
  })
  .then(dataUser => {
    res.send(dataUser);
  })
  .catch(err => {
    res.send(err);
  });
}

let editUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let isadmin = req.body.isadmin;
  User.update(
    {
    username: username,
    password: password,
    isadmin: isadmin
  }, {
    where: { id: req.params.id }
  })
  .then(dataUser => {
    res.send(dataUser);
  })
  .catch(err => {
    res.send(err);
  });
}

module.exports = {
  getAllUser,
  getById,
  addUser,
  deleteById,
  editUser,
};
