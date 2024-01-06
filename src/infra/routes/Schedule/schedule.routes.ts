import { Router } from 'express';

import { listScheduleController } from '@modules/Schedule/controllers/listSchedule.controller';

const router = Router();

router.post('/schedule/list', listScheduleController);

export { router as scheduleRoutes };
