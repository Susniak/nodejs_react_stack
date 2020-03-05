import express from 'express';

import applicationRoutes from "./routes";

const router = new express.Router();

applicationRoutes.forEach(({path, controller}) => {
    router.use(`/${path}`, controller)
});

export default router;
