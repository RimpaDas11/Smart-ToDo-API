const express=require('express');
const Task=require('../models/Task');
const auth=require('../middleware/authMiddleware');
const router=express.Router();

router.post('/',auth,async(req,res)=>{
  const task=await new Task({...req.body,user:req.user.id}).save();
  res.json(task);
});

router.get('/',auth,async(req,res)=>{
  res.json(await Task.find({user:req.user.id}));
});

router.put('/:id',auth,async(req,res)=>{
  res.json(await Task.findByIdAndUpdate(req.params.id,req.body,{new:true}));
});

router.delete('/:id',auth,async(req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({message:'Task deleted'});
});

module.exports=router;
