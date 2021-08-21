import React from "react";
import mongoose from "mongoose";

// Object Relation Model (ORM)

const connection = {};

async function connectDb() {
  // Existing DB connection
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }

  // Use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected");
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
