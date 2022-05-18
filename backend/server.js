import express from "express"
import dotenv from 'dotenv'
import colors from 'colors'
import linkRoutes from './routes/linkRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/database.js'

const app = express()
dotenv.config()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/links', linkRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`App running on port ${PORT}`))