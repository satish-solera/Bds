const { adsShow, adsType , posterAds , businessAds , jwelleryAds , commercialAds , searchIteam , cart} = require("../controllers/ads.controllers");
const { Router } = require("express");
const authMiddleware = require("../middlewares/authenticate.middleware");
const router = Router();

router.route('/ads').get(adsShow)
router.route('/adstype').get( adsType)
router.route('/adstype/iteam').get(searchIteam) 
router.route('/adstype/posterads').get(posterAds)
router.route('/adstype/businessads').get(businessAds)
router.route('/adstype/jwelleryads').get(jwelleryAds)
router.route('/adstype/commercialads').get(commercialAds)
router.route('/cart').get( authMiddleware ,cart)

module.exports = router;
