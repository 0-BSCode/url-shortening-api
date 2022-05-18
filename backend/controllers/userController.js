import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Register user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error("User already exists!")
    }

    const salt = await bcrypt.genSalt(10)
    const hasedPass = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPass
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
})

const generateToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '15d'})
}