import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Faui.atlassian.com%2Faui%2F8.8%2Fdocs%2Favatars.html&psig=AOvVaw2nUv4nRfYCm-8MEYF396Gx&ust=1721394198647000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDB76DTsIcDFQAAAAAdAAAAABAE",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
