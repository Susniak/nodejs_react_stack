import healthCheckRouter from "../controllers/health-check";

const applicationRoutes = [
    {
        path: 'health',
        controller: healthCheckRouter
    }
];

export default applicationRoutes;
