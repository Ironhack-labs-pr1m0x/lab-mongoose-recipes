const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Iteration 2 - Create a recipe
Recipe.create(data[0], { new: true })
  .then((recipe) => {
    console.log('recipe was created: ', recipe.title);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('error occured', err);
  });

// Iteration 3 - Insert multiple recipes
Recipe.insertMany(data[1], data[2], { new: true })
  .then((recipe) => {
    console.log('recipe was created: ', recipe.title);
  })
  .catch((err) => {
    console.log('error occured', err);
  });

// Iteration 4 - Update recipe
Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
  .then((recipe) => {
    console.log('recipe was updated: ', recipe.title);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('error occured', err);
    mongoose.connection.close();
  });

// Iteration 5 - Remove a recipe
Recipe.deleteOne({ title: 'Carrot Cake' })
  .then((recipe) => {
    console.log('recipe was deleted: ', recipe.title);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('error occured', err);
  });

// Iteration 6 - Close the Database
// Closed connection in each CRUD Operation

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
