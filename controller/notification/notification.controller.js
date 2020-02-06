let Notification =require('../../model/notifications/notification');
const {notificationUpdateData,notificationData} = require("../../model/notifications/validation");

exports.index=async (req,res)=> {
    let notification= await Notification.find({ '_id': { $in:req.user.notifications}}, function(err){
        if (err) return res.status(400).json(err);
    });
    return res.json({notification,status:true})
};

exports.createOne=async (req,res)=> {
    let {error,value}=notificationData(req.body);
    if (error) return res.json({error:error.details[0].message});
    value.userID=req.user._id;
    let notification=await new Notification(value);
    notification=await notification.save();
    req.user.notifications.push(notification._id);
    // req.user.notifications.push(notification);
    await req.user.save();
    return res.json({status:true,notification})
};

exports.showOne=async (req,res)=> {
    let notification=await Notification.findById(req.params.id).catch((err)=>{
        if (err) return res.status(404).json({err,message:"Not Found"});
    });
    return res.json({status:true,notification})
};

//Notification
exports.updateOne=async (req,res)=> {
    let {error,value}=notificationUpdateData(req.body);
    if (error) return res.json({error:error.details[0].message,validation:true});
    value.updatedAt=Date.now();
    let notification=await Notification.findByIdAndUpdate(req.params.id,value,(err,notification)=>{
        if (err) return res.status(400).json(err);
        // return res.json({status:true,notification});
    });
    return res.json({status:true,notification});
};

exports.deleteOne=async (req,res)=> {
    let notification=await Notification.findByIdAndRemove(req.params.id,req.body,(err,notification)=>{
        if (err) return res.status(400).json(err);
        // return res.json({status:true,notification});
    });
    return res.json({status:true,notification});
};
