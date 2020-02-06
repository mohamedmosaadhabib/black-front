let Request =require('../../model/RequestPayments/request');
const {MakeNotification,SendNotificationToUser} = require("../../functions");
let Center =require('../../model/exchangeCenter/center');
const {requestData,requestUpdateData} = require("../../model/RequestPayments/validation");

exports.index=async (req,res)=> {
    let request= await Request.find({ '_id': { $in:req.user.requests}}, function(err){
        if (err) return res.status(400).json(err);
    });
    return res.json({request,status:true})
};

exports.createOne=async (req,res)=> {
    let {error,value}=await requestData(req.body);
    if (error) return res.json({error:error.details.map((err)=>err.message)});
    value.userID=req.user._id;
    let request=await new Request(value);
    Request.data=req.body;
    request=await request.save();
    req.user.requests.push(request._id);
    // req.user.requests.push(request);
    await req.user.save();
    return res.json({status:true,request})
};

exports.showOne=async (req,res)=> {
    let request=await Request.findById(req.params.id,(err,request)=>{
        if (err) return res.status(404).json(err);
        // return res.json({status:true,request});
    });
    return res.json({status:true,request})
};

//Request
exports.updateOne=async (req,res)=> {
    let {error,value}=await requestUpdateData(req.body);
    if (error) return res.json({error:error.details[0].message,validation:true});
    value.updatedAt=Date.now();
    let request=await Request.findByIdAndUpdate(req.params.id,value,(err,request)=>{
        if (err) return res.status(400).json(err);
        // return res.json({status:true,request});
    });
    if (req.body.length) {
        request.data.push(req.body);
        await request.save();
    }
    return res.json({status:true,request});
};

exports.deleteOne=async (req,res)=> {
    let request=await Request.findByIdAndRemove(req.params.id,req.body,(err,request)=>{
        if (err) return res.status(400).json(err);
        // return res.json({status:true,request});
    });
    return res.json({status:true,request});
};

// exports.acceptRequest=async (req,res)=> {
//     if (req.user.roles.filter((role)=>role==="admin").length){
//         let request=await Request.findById(req.params.id).then(async request=>{
//             let user =await User.findById(request.userID).catch(err=>{
//                 if (err) return res.status(400).json(err);
//             });
//             let userWallet=user.wallet.filter(wallet=>wallet._id === request.centerID && request.amount < wallet.amount);
//             if (userWallet.length){
//                 let center=await Center.findByIdAndUpdate(request.centerID,async (err,center)=>{
//                     center.wallet-=request.amount;
//                     await center.save();
//                 }).catch(err=>{
//                     if (err) return res.status(400).json(err);
//                 });
//             }
//
//         }).catch(err=>{
//             if (err) return res.status(400).json(err);
//         });
//         return res.json({status:true,request});
//     }
//
//     return res.json({status:false});
// };

// exports.refuseRequest=async (req,res)=> {
//     if (req.user.roles.filter((role)=>role==="admin").length){
//         let request=await Request.findByIdAndUpdate(req.params.id,{requestCase:2},async (err,request)=>{
//             if (err) return res.status(400).json(err);
//            await SendNotificationToUser({userID:request.userID,notificationID:await MakeNotification({userID:req.user._id,title:"refuse your Request",message:"this request is refuse by admin"})._id});
//         }).catch(err=>{
//             if (err) return res.status(400).json(err);
//         });
//         return res.json({status:true,request});
//     }
//     return res.json({status:false}).status(403);
// };

