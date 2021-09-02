# Social Network Model

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description:

This is an API for social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [Packages](#packages)
* [Demo](#demo)

## Installation

* Clone the [Repo](https://github.com/sonali-pandey/social-network-model)
* Run `npm install` on the command prompt to install all the dependencies

## Usage

* **Starting the server:**
   - Run `npm start` : manually stop and start
   - Run `npm run dev` : starts the server through [nodemon](https://www.npmjs.com/package/nodemon); auto-refreshes

* **Testing the APIs**
   - Use [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API queries
   - Below are the APIs that can be tested:

**GET API : View Data**

      1. /api/users : Displays all the Users
      2. /api/users/<user_id> : Displays User detail of the provided id
      
      3. /api/thoughts : Displays all the Thoughts
      4. /api/thoughts/<user_id>/<thought_id> : Displays Thoughts by id
      
**POST API : Add Data**
      
      1. /api/users : Create a new User
      2. /api/thoughts/<user_id> : Cteate a new Thought for a given user
      3. /api/thoughts/<user_id>/<thought_id> : Create a new reaction to the thought of a given id
      4. /api/users/<user_id>/friends/<friend_id> : Add friend to friend list of the giver user id
 
 **PUT API : Update Data**
      
      1. /api/users/<user_id> : Update user detail of the provided id
      2. /api/thought/<user_id>/<thought_id> : Update the thought with the provided id of the provided user id

**DELETE API : Delete Data**
  
      1. /api/users/<user_id> : Delete the User with the provided id
      2. /api/thoughts/<user_id>/<thought_id> : Delete the thought with the provided id
      3. /api/thoughts/<user_id>/<thought_id> : Delete the reaction of the given id's thought
      4. /api/users/<user_id>/friends/<friend_id> : Delete a friend from the friend list of the given user id
      
## Packages
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Demo

Click [HERE]() to watch the demo.

## Thank You
### Author Details
**Name:** Sonali Pandey

**GitHub:** [sonali-pandey](https://github.com/sonali-pandey)

