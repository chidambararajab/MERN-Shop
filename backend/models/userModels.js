import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  // bcrypt.compare() method will Asynchronously compares the given data against the given hash.
  return bcrypt.compare(enteredPassword, this.password);
};

// This pre() method will automatically run, when ever mongoose find, create, or other methods are called to save changes or add changes in database.
// We only want to hash the password when its initially sent or modified. If its not modified we need to skip hashing the already hashed password. (In some cases we need to update name alone, so we don't want to hash the password which is already hashed).
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
