import express from 'express'
import UserModel from '../models/userModel'
const UserRouter = express.Router();

UserRouter.route('/')
    .get((req, res) => {
        UserModel.find({}, (err, user) => {
            res.json(user)
        })
    })
    .post((req, res) => {
        let user = new UserModel({pseudo: req.body.pseudo, password: req.body.password})
        user.save()
        res.status(201).send(user)
    })

export default UserRouter
