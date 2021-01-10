import express from "express";
import jwt from "express-jwt";
const router = express.Router()

router.get('/', async (req, res, next) => {
    res.json([
            'oi'
    ]);
})

export default router;