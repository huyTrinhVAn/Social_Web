import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    })
    console.log("NODE_ENV:", process.env.NODE_ENV);
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //MS 
        httpOnly: true, // prevent from attack
        sameSite: "strict",// prevent from attack
        secure: process.env.NODE_ENV !== "development",
    })
    console.log("Cookie set with token:", token);
}