const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/Tasks";

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Połączono z bazą danych");
  } catch (err) {
    console.error("Błąd połączenia:", err);
    process.exit(1);
  }
}

async function disconnectDB() {
  await mongoose.disconnect();
}

module.exports = { connectDB, disconnectDB };