import express, {Express, Request, Response} from 'express'
// @ts-ignore
import dotenv from 'dotenv'

const app: Express = express()
const port = process.env.PORT || 8080;


app.get('/status', (req:Request, res: Response)=>{
    res.json({
        status: 'Up'
    })
})

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})
