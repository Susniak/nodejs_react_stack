import express from 'express';
import accountRouter from "./account";
import playerRouter from "./player";
import healthCheckRouter from "./health-check";

const routes = [
    {
        path: 'account',
        controller: accountRouter
    },
    {
        path: 'player',
        controller: playerRouter
    },
    {
        path: 'health',
        controller: healthCheckRouter
    }
];

const router = new express.Router();

routes.forEach(({path, controller}) => {
    router.use(`/${path}`, controller)
});

export default router;
