import { Router } from 'express';
import { authRouter } from './auth';
import { applicationRouter } from './applications';
import { adminRouter } from './admin';
import { donationRouter } from './donations';
import { contactRouter } from './contact';
import { profileRouter } from './profile';

const router = Router();

router.use('/auth', authRouter);
router.use('/applications', applicationRouter);
router.use('/admin', adminRouter);
router.use('/donations', donationRouter);
router.use('/profile', profileRouter);
router.use('/contact', contactRouter);

export { router };
