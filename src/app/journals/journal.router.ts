import express from 'express';
import security from '../security/security';

const journalRouter = express.Router();
const jwtMiddleware = security.authenticate('jwt', { session: false });

journalRouter.get('/:id', jwtMiddleware, (req, res) => {
  return res.sendStatus(200);
});

export default journalRouter;
