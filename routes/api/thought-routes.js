const router = require('express').Router();

//Get all controller functions for thought model
const {
  getAllThoughts,
  getThoughtsbyId,
  createThoughts,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);


// /api/thoughts/<userId>
router
  .route('/:userId')
  .post(createThoughts);

router
  .route('/:userId/:thoughtId')
  .get(getThoughtsbyId)
  .put(updateThought)
  .delete(deleteThought)
  .post(addReaction);

router
  .route('/:userId/:thoughtId/:reactionId')
  .delete(deleteReaction);

module.exports = router;