const bcrypt = require("bcryptjs");
const User = require("../Models/user.Model");
const generateTokenAndSetCookie = require("../utils/generateToken");

const signup = async (req, res) => {
  try {
    const { fullname, username, gender, password, confirmPassword } = req.body;

    // Check password and confirmPassword are same or not
    if (password !== confirmPassword) {
      return res.status(401).json({ err: "Password don't match" });
    }
    // Check what user already exists
    const user = await User.findOne({ username });
    if (user) {
      return res.status(401).json({ err: "User already exits" });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new User
    const newUser = new User({
      fullname,
      username,
      gender,
      password: hashedPassword,
    });

    if (newUser) {
      // generate Token
      generateTokenAndSetCookie(newUser._id, res);
      const response = await newUser.save();
      res.status(201).json(response);
      console.log("Signup Successfully");
    } else {
      return res.status(401).json({ err: "Invalid User" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordMatch = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordMatch) {
      return res.status(401).json({ err: "Invalid username or password" });
    }
    // generateToken
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      gender: user.gender,
    });
    console.log("Logged In Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
    console.log("Logged out successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = { signup, login, logout };
