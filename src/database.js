import mongoose from "mongoose";

const optDb = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, optDb)
  .then(_ => console.log('DB is connected'))
  .catch(error => console.error(error));