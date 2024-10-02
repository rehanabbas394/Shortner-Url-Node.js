const model = require("../model/url.model");
const shortid = require("shortid");

async function generateUrl(req, res) {
    const body = req.body;
    console.log(req.body)
    if (!body.url) return res.status(400).json({ error: "URL is required" });
    const shortId = shortid.generate();
    console.log(body.url);
    await model.create({
        shortId: shortId,
        redirectUrl: body.url, 
        visitHistort: [],
        // createdby:req.user.id 
    });
    return res.render("home",{ 
      id: shortId
    })
}

async function redirectSIte(req, res) {
  const shortId = req.params.shortId
  const entry = await model.findOneAndUpdate({
    shortId
  },
  {
    $push:{
        visitHistort:{timeStamp:Date.now()}
    }
  })
 return res.redirect(entry.redirectUrl) 
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortId
    const entry = await model.findOne({shortId})
    return res.json({totalClick:entry.visitHistort.length,analytics:entry.visitHistort})

}

module.exports = { generateUrl,redirectSIte, getAnalytics }; 
