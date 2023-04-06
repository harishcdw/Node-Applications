const express=require('express');
const router=express.Router();

const writeinfo=require('../controllers/writeController');

router.post("/",writeinfo.write_buddy);

module.exports=router;