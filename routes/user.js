import { Router } from "express";

const router = Router();

router.get('/', (req,resp)=>{
    return resp.send(Object.values(req.context.models.users));
})
router.get('/:userId', (req,resp)=>{
    return resp.send(req.context.models.users[req.params.userId]);
})


// app.post('/users', (req,resp)=>{
//     resp.send('Recieved POST HTTP method on user resource');
// })
// app.put('/users/:userId', (req,resp)=>{
//     resp.send(`Recieved PUT HTTP method on user/${req.params.userId} resource`);
// })
// app.delete('/users/:userId', (req,resp)=>{
//     resp.send(`Recieved DELETE HTTP method on user/${req.params.userId} resource`);
// })
export default router;