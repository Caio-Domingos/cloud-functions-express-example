import express, { NextFunction, Request, Response } from 'express';

const voucherRouter = express.Router();

voucherRouter.use(function timeLog(req: Request, res: Response, next: NextFunction) {
    console.log('Time: ', Date.now());
    next();
});

voucherRouter.get('/test-router', function (req: Request, res: Response) {
    res.json({ msg: 'Voucher Router!. Welcome!' });
});

module.exports = voucherRouter;
