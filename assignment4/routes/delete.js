const express=require('express');
const router=express.Router();

const deleteinfo=require('../controllers/deleteController');

router.delete("/:id",deleteinfo.delete_buddy);

module.exports=router;