// Iteration 2 - Create a recipe
// Recipe.create({ title: 'a', cuisine: 'aaa' }, { new: true })
//   .then((recipe) => {
//     console.log('recipe was created: ', recipe.title);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('error occured', err);
//   });

// Recipe.create(data[0], { new: true })
//   .then((recipe) => {
//     console.log('recipe was created: ', recipe.title);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('error occured', err);
//   });

// // Iteration 3 - Insert multiple recipes
// Recipe.insertMany(data[1], data[2], { new: true })
//   .then((recipe) => {
//     console.log('recipe was created: ', recipe.title);
//   })
//   .catch((err) => {
//     console.log('error occured', err);
//   });

// // Iteration 4 - Update recipe
// Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
//   .then((recipe) => {
//     console.log('recipe was updated: ', recipe.title);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('error occured', err);
//     mongoose.connection.close();
//   });

// // Iteration 5 - Remove a recipe
// Recipe.deleteOne({ title: 'Carrot Cake' })
//   .then((recipe) => {
//     console.log('recipe was deleted: ', recipe.title);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('error occured', err);
//   });

// Iteration 6 - Close the Database
// Closed connection in each CRUD Operation
