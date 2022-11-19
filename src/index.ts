import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import {getXataClient} from "./xata";

dotenv.config()

const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 8080;

const xata = getXataClient();

app.get('/status', (req, res) => {
    res.json({
        status: 'Up'
    })
})

app.get('/api/jobs', async (req, res) => {
    const jobs = await xata.db.job.getAll()
    res.json({jobs})
})

app.get('/api/jobs/:id', async (req, res) => {
    const id = req.params.id
    const job = await xata.db.job.read(id)
    res.json({job})
})

app.post('/api/jobs', async (req, res) => {
    const job = req.body
    const createdJob = await xata.db.job.create(job)
    res.json({job: createdJob})
})

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})
