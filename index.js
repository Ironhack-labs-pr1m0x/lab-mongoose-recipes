const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"

const mongoSetup = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then((self) => {
        console.log(`Connected to the database: "${self.connection.name}"`);
        // Before adding any documents to the database, let's delete all previous entries
        resolve(true);
        return self.connection.dropDatabase();
      })
      .catch((error) => {
        console.error('Error connecting to the database', error);
      });
  });
};

const createDocs = async () => {
  return new Promise((resolve, reject) => {
    Recipe.create(data[0])
      .then((recipe) => {
        console.log('recipe was created: ', recipe.title);
        Recipe.insertMany([data[2], data[3]], { new: true })
          .then((recipe) => {
            console.log('recipes created');
            resolve(true);
          })
          .catch((err) => {
            console.log('error occured', err);
          });
      })
      .catch((err) => {
        console.log('error occured', err);
      });
  });
};

const updateDoc = () => {
  return new Promise(async (resolve, reject) => {
    await Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 1000 });
    console.log('recipe updated');
    resolve(true);
  });
};

const deleteDoc = async () => {
  await Recipe.findOneAndDelete({ title: 'Carrot Cake' });
  console.log('recipe deleted');
  mongoose.connection.close();
};

mongoLab = async () => {
  await mongoSetup();
  await createDocs();
  await updateDoc();
  await deleteDoc();
};

mongoLab();
