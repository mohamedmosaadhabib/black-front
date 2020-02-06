let Center =require('../../model/exchangeCenter/center');
let User =require('../../model/user/user');
let Notification =require('../../model/notifications/notification');
const {SendNotificationToAll} = require("../../functions");
const {MakeNotification} = require("../../functions");
const {centerUpdateData,centerData} = require("../../model/exchangeCenter/validation");

exports.index=async (req,res)=> {
    let centers= await Center.find({}, function(err){
        if (err) return res.status(400).json(err);
    });
    return res.json({centers,status:true})
};

exports.createOne=async (req,res)=> {
    let {error,value}=await centerData(req.body);
    if (error) return res.json({error:error.details.map((err)=>err.message)});
    value.userID=req.user._id;
    let center=await new Center(value);
    Center.data=req.body;
    await center.save();
    return res.json({status:true,center})
};

exports.showOne=async (req,res)=> {
    let center=await Center.findById(req.params.id,(err,center)=>{
        if (err) return res.status(404).json(err);
        // return res.json({status:true,center});
    });
    return res.json({status:true,center})
};

//Center
exports.updateOne=async (req,res)=> {
    let {error,value}=await centerUpdateData(req.body);
    if (error) return res.json({error:error.details[0].message,validation:true});
    value.updatedAt=Date.now();
    let center=await Center.findByIdAndUpdate(req.params.id,value,async (err,center)=>{
        if (err) return res.status(400).json(err);
        await SendNotificationToAll(await MakeNotification({
            userID:req.user._id,
            title:'System Notification',
            message:center.currency+" rate changed to "+center.rate
        })._id);
        // return res.json({status:true,center});
    });

    return res.json({status:true,center});
};

exports.deleteOne=async (req,res)=> {
    let center=await Center.findByIdAndRemove({_id:req.params.id},req.body,(err,center)=>{
        if (err) return res.status(400).json(err);
        // return res.json({status:true,center});
    });
    return res.json({status:true,center});
};


//2507 NEO
//2760 LBA