const express=require('express');
const router=express.Router();

const readinfo=require('../controllers/readController');

router.get("/",readinfo.display_buddies);

router.get("/:id",readinfo.display_buddy);

module.exports=router;