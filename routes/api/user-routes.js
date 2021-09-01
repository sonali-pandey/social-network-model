const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');
const router = require('express').Router();

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;