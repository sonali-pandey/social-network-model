const router = require('express').Router();

//Get all controller functions for thought model
const {
  getAllThoughts,
  getThoughtsbyId,
  createThoughts,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);


// /api/comments/<pizzaId>
router
  .route('/:userId')
  .post(createThoughts);

router
  .route('/:userId/:thoughtId')
  .get(getThoughtsbyId)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;