import createHttpError from "http-errors";
import { findUser, signup } from "../services/auth-services.js";
import { compareHash } from "../utils/hash.js";

export const signupController = async(req, res)=> {
    const {email} = req.body;
    const user =  await findUser({email});
    if(user) {
        throw createHttpError(409, "Email already in use");
    }

    const newUser = await signup(req.body);

    const data = {
        name: newUser.name,
        email: newUser.email,
    };

    res.status(201).json({
        status: 201,
        data,
        message: "User signup successfuly",
    })
}

export const signinController = async(req, res)=> {
    const {email, password} = req.body;
    const user = await findUser({email});
    if(!user) {
        throw createHttpError(404, "Email not found");
    }

    const passwordCompare = await compareHash(password, user.password);
    if(!passwordCompare) {
        throw createHttpError(401, "Password invalid");
    }

    const session = await createSession(user._id);

    setupResponseSession(res, session);

    res.json({
        status: 200,
        message: "User signin successfully",
        data: {
            accessToken: session.accessToken,
        }
    });
}