import { nanoid } from "nanoid";
import URL from "../models/url.js"


export async function handleGenerateNewShortUrl(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'});
    const shortId=nanoid(8);

    await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[],
    })
    return res.json({id:shortId});
}


export async function handleRedirectUrl(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
        {shortId},
        {
            $push:{
                visitHistory:{
                    timestamp:Date.now(),
                }
            },
        },
    );
    res.redirect(entry.redirectUrl);
}


export async function handleGETAnalytics(req,res){
    const shortId=req.params.shortId;
    const result =await URL.findOne({shortId});
    return res.json({
        totalClick:result.visitHistory.length,
        analytics:result.visitHistory,
    });
}