import { Router } from "express";
import { getIssues } from "../controllers/jiraRest/getIssues.js";
import { getUsers } from "../controllers/jiraRest/getUsers.js";
import { createIssue } from "../controllers/jiraRest/createIssue.js";
import { readExcel } from "../controllers/excel/readExcel.js";

const router = Router();

router.route('/api/jira/users').get(async(req,res)=>{
    try{
        let respuesta = await getUsers()

        res.status(200).json(respuesta)
    }catch(err){
        console.log(err)
    }
})

router.route('/api/jira/issue')
.get(async(req,res)=>{
    try{
        let data = await getIssues()

        res.status(200).json(data.issues)
    }catch(err){
        console.log(err)
    }
})
.post(async(req,res)=>{
    try{
        /*
        let {projectKey, issueType, summary, description} = req.body
        
        let issueCreated = await createIssue(projectKey, issueType, summary, description)

        if(issueCreated.key){
            res.status(200).json({
                message:"Card creada con exito!",
                data:issueCreated
            })
        }
        */
       console.log('Comenzando a crear las cards en jira: ')
       let data = await readExcel('Hoja 1')
       let progreso = 0
       let total = data.length
       data.forEach(async (element) => {
        if(element.FASE === undefined) return 
        console.log(progreso)
        await createIssue('PROYEC', 'Story', element.NOMBRE, '',[element.GRUPO],'PROYEC-37')
        progreso += 1
       })

       if(progreso >= total){
        res.send('Las cards se crearon con exito!')
       }
    }catch(err){
        console.log(err)
    }
})

export default router;