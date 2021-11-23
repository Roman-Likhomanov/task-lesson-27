import Router from "express";
import CalendarController from "./CalendarController.js";

const router = new Router();

router.post("/calendars", CalendarController.create);
router.get("/calendars", CalendarController.getAll);
router.get("/calendar/:id", CalendarController.getOne);
router.put("/calendars", CalendarController.update);
router.delete("/calendars/:id", CalendarController.delete);

export default router;
