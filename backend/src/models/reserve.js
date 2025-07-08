/*Reserva
{
"clientId": ObjectID,
"vehicle": String,
"service": String,
"status": String
}*/

import { Schema, model } from "mongoose";

const reserveSchema = new Schema(
    {
        idClient: {
            type: Schema.Types.ObjectId,
            ref: "customers",
            require: true,
          },

        vehicule: {
            type: String,
            require: true,
          },

        service: {
            type: String,
            require: true,
          }, 

        status: {
            type: String,
            require: true,
          },
    },
    {
        timestamps: true,
        strict: false,
      }
);

export default model("reserves", reserveSchema);