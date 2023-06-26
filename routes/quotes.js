import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', (req, resp) => {
    return resp.send(req.context.models.quotes);
});

router.get('/:quoteId', (req, resp) => {
    return resp.send(req.context.models.quotes[req.params.quoteId]);
});

router.post('/', (req, resp) => {
    const id = uuidv4();
    const quote = {
        id,
        quote: req.body.quote,
        author: req.body.author,
        year: req.body.year,
    };
    req.context.models.quotes[id] = quote;
    return resp.send(quote);
});

export default router;
