import express from 'express'

// import controller of url
import {handleGetAll,handleGenerateNewShortUrl,handleRedirectUrl,handleGETAnalytics} from "../controllers/url.js"

const router = express.Router();

router.get('/',handleGetAll);
router.post('/',handleGenerateNewShortUrl);
router.get('/:shortId',handleRedirectUrl);
router.get('/analytics/:shortId',handleGETAnalytics);

export default router;