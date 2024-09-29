import User from "../models/user.js"
import { v4 as uuidv4 } from 'uuid';
import {setUser} from '../services/auth.js'
export async function handleSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    })
    return res.json({ "msg": "all ok" });
}

export async function handleLogin(req, res) {
    console.log("hi form controller login");
    const { email, password } = req.body;
    const user = await User.findOne({ "email": email });
    console.log(user)
    if (!user)
        return res.status(404).json({ "msg": "user not found for this email" });
    if (user.password !== password)
        return res.status(404).json({ "msg": "password not matched" });
    const sessionId=uuidv4();
    console.log("id is uuid:",sessionId);
    setUser(sessionId,user);
    // res.cookie("uid",sessionId);
    res.cookie("uid", sessionId,);
    return res.status(200).json({ "msg": "user founded" });
}