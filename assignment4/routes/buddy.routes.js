const express=require('express');
const router=express.Router();

const Buddy_info=require('../controllers/buddy.controller');

router.get("/",Buddy_info.displayBuddies);

router.get("/:id",Buddy_info.displayBuddy);

router.post("/",Buddy_info.writeBuddy);

router.put("/:id",Buddy_info.updateBuddy);

router.delete("/:id",Buddy_info.deleteBuddy);

module.exports=router;