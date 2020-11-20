import { Router } from 'express';
import { CardsController } from '../controllers/cards.controller';

const router = Router();

router.get(
  '/cards',
  CardsController.searchBackup
);

router.post(
  '/cards',
  CardsController.createBackup
);

router.delete(
  '/cards',
  CardsController.purgeBackup
);

export const cardRouter = router;
