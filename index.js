import express from "express"
import "dotenv/config";
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';
import { readExcel } from "./controllers/excel/readExcel.js";


import jiraRoutes from './routes/jira.routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

let app = express()

app.use(express.json())
app.use(jiraRoutes)


app.post('/api/chat',async (req,res)=>{
    try{
        let prompt = req.body.prompt
        console.log('Hola', prompt)

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-16k-0613',
            messages: [{ content: prompt }],
            max_tokens:60,
            top_p:1,
            frequency_penalty:0.5,
            presence_penalty:0
          });

        res.json({
            messages: chatCompletion
        })
    }catch(err){
        console.log(err)
    }
})

app.listen(process.env.PORT,()=>{
    console.log("Server listening in http://localhost:" + process.env.PORT)
})