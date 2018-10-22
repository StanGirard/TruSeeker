import express from 'express'
import exampleModel from '../models/exampleModel'
const exampleRouter = express.Router();

exampleRouter.route('/')
    .get((req, res) => {
        exampleModel.find({}, (err, example) => {
            res.json(example)
        })
    })
    .post((req, res) => {
        let example = new exampleModel({test: req.body.test, number: req.body.number})
        example.save()
        res.status(201).send(example)
    })

export default exampleRouter
