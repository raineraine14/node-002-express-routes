import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', (req,resp)=>{
    return resp.send(Object.values(req.context.models.messages));
})

router.get('/:messageId', (req,resp)=>{
   return resp.send(req.context.models.messages[req.params.messageId]);
})

router.post('/', (req,resp)=>{
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id,
    }
    req.context.models.messages[id] = message;
    return resp.send(message);
})

router.delete('/:messageId', (req,resp)=>{
    const{
        [req.params.messageId]:message,
        ...otherMessages
    } = req.context.models.messages;

    req.context.models.messages = otherMessages;

    return resp.send(message);
 })

 export default router;
 
