
import express from 'express';
import { getInterviewProblem, submitSolution } from '../controllers/interviewController';

const router = express.Router();

// Interview routes
router.get('/problems/:id', getInterviewProblem);
router.post('/submit', submitSolution);

export default router;
