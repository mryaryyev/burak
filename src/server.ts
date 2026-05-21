// Architectural pattern: backend => MVC, Dependency Injection,  frontend => MVP

// MVC = MODEL VIEW CONTROLLER

// Design pattern: Middleware, Decodar

// Design pattern -> 3 categories -> Creational, Structural and Behavioral

// ESM JS => import moment from "moment";
// COMMON JS => const moment = require('moment');

import dotenv from "dotenv";
dotenv.config();

//console.log("PORT:", process.env.PORT);

//console.log("MONGO_URL:", process.env.MONGO_URL);

// CLUSTER => DATABASE => COLLECTION => DOCUMENT
// distributed database = NoSql

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
