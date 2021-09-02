const { User, Thought } = require('../models');

const thoughtController = {
  //get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get thought by id
  getThoughtsbyId({params}, res) {
    Thought.find({_id: params.thoughtId})
      .select('-__v')
      .then(dbThoughtData => {
        if(!dbThoughtData) {
          //check if thought exists
          res.status(400).json({message: 'No thought found with this id'});
          return;
        };
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  },

  //Add new thought
  createThoughts({ params, body }, res) {
    //Find the user first
    User.find({_id: params.userId})
      .then(dbUserData => {
        //check if user exists
        if(!dbUserData) {
          res.status(400).json({message: 'Thought cannot be added as no user found with this id!'});
          return;
        };
        //if exists, get the username and add
        body.username = dbUserData[0].username;
        return body;
      })
      .then(body => {
        //create new thought
        Thought.create(body)
          .then(({ _id }) => {
            //update user thought array
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: _id }},
              { new: true, runValidators: true }
            );
          })
          .then(newUserData => res.json(newUserData))
      })
      .catch(err => res.json(err));
  },

  //Update a thought
  updateThought({params, body}, res) {
    Thought.findOneAndUpdate(
      {_id: params.thoughtId},
      {thoughtBody: body.thoughtBody},
      {new: true, runValidators: true}
    )
    .then(dbThoughtData => {
      if(!dbThoughtData) {
        //check if thought exists
        res.status(400).json({message: 'No thought found with this id'});
        return;
      };
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },

  //delete thought
  deleteThought({ params }, res) {
      Thought.findOneAndDelete({_id: params.thoughtId})
        .then(deletedThought => {
          //check if thought exists
          if(!deletedThought) {
            return res.status(400).json({message: 'No thought found with this id'});
          }
          return User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { thoughts: params.thoughtId }},
            { new: true, runValidators:true}
          );
        })
        .then(dbUserData => {
          if(!dbUserData) {
            res.status(404).json({ message: 'No User found with this ID!'});
            return;
          }
          res.json({message: 'Thought has been deleted!!'});
        })
        .catch(err => res.status(400).json(err));
  },

  //Add reaction
  addReaction({ params, body }, res) {
    User.find({ _id: params.userId })
      .then(dbUserData => {
        //check if user exists
        if(!dbUserData) {
          res.status(400).json({message: 'Incorrect user information! Please try again!!'});
          return;
        };
        //if exists, get the username and add
        body.username = dbUserData[0].username;
        return body;
      })
      .then(body => {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $push: { reaction: body } },
          { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
          //check if thought exists
          if(!dbThoughtData) {
            res.status(400).json({message: 'No thought found with this id'});
            return;
          };
          res.json(dbThoughtData);
        }) 
      })
      .catch(err => res.status(400).json(err));  
  },

  //Delete reaction
  deleteReaction({params}, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reaction: { reactionId: params.reactionId } } },
      { new: true, runValidators: true }
    )
    .then(dbThoughtData => {
      //check if thought exists
      if(!dbThoughtData) {
        res.status(400).json({message: 'No thought found with this id'});
        return;
      };
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },
};

module.exports = thoughtController;

