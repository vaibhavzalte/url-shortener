import express from 'express'

// import controller of url
import {handleGenerateNewShortUrl,handleRedirectUrl,handleGETAnalytics} from "../controllers/url.js"

const router = express.Router();


router.post('/',handleGenerateNewShortUrl);
router.get('/:shortId',handleRedirectUrl);
router.get('/analytics/:shortId',handleGETAnalytics);

export default router;