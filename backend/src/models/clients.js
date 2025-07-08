/*Cliente
{
"name": String,
"email": String,
"password": String,
"phone": String,
"age": Number,
} */

import { Schema, model } from "mongoose";

const clientsSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
          },

          email: {
            type: String,
          },

          password: {
            type: String,
          },

          phone: {
            type: String,
            require: true,
          },

          age: {
            type: Number,
            min: 18,
            max: 100,
            require: true
          },  
    },
    {
        timestamps: true,
        strict: false,
      }
);

export default model("clients", clientsSchema);