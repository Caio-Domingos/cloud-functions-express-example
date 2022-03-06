import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express, { Request, Response } from 'express';
import cors from 'cors';

const cert = require('./public/cert.json')
const voucherRouter = require('./router/voucher');

admin.initializeApp({
    credential: admin.credential.cert(cert),
    databaseURL: 'https://weburn-voucher-dispenser-v2.firebaseio.com',
});
export const db = admin.firestore();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/voucher', voucherRouter);

app.get('/', (req: Request, res: Response) => {
    res.json({ msg: 'Weburn Voucher dispenser V2 HTTP. Welcome!' });
});

export const api = functions.https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
