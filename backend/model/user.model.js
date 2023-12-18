const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
  
      email: {
          type: String,
          unique: true,
          required: [true, "email is required "],
          trim: true,
          lowercase: true,
        },
        password: {
          type: String,
          required: [true, "password  is required "],
          trim: true,
          lowercase: true,
        },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
