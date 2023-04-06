const express=require('express');
const router=express.Router();

const updateinfo=require('../controllers/updateController');

router.put("/:id",updateinfo.update_buddy);

module.exports=router;