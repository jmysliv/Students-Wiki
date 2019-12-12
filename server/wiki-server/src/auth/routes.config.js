import  { isPasswordAndUserMatch } from '../auth/verify.user.middleware'
import { login } from '../auth/authorization.controller'
import { validJWTNeeded, verifyRefreshBodyField, validRefreshNeeded } from '../auth/validation.middleware'
import express from 'express';
var router = express.Router();

router.post('/', [
        isPasswordAndUserMatch,
        login
    ]);

router.post('/refresh', [
        validJWTNeeded,
        verifyRefreshBodyField,
        validRefreshNeeded,
        login
    ]);

export default router;
