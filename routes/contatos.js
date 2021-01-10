import express from "express";
const router = express.Router()

router.get('/', async (req, res, next) => {
    res.json([
            'oi'
    ]);
})

export default router;