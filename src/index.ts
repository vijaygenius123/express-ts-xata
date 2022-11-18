import express from 'express'
import dotenv from 'dotenv'
import {getXataClient} from "./xata";

dotenv.config()

const app = express()
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

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})
