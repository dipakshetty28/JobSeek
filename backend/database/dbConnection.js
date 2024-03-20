import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb+srv://dipakshetty28:Mern123@merndb.zgr5zc6.mongodb.net/", {
      dbName: "MERNDB",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
