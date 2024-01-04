import { Router } from 'express';
import { loginRouter } from './Authentication/login.routes';
import { createUserRouter } from './User/createUser.routes';
import { scheduleRoutes } from '@infra/routes/Schedule/schedule.routes';

const router = Router();

router.use(loginRouter);
router.use(createUserRouter);
router.use(scheduleRoutes);

export { router as mainRoutes };
