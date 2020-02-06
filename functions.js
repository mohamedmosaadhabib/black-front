const User = require("./model/user/user");
const Notification = require("./model/notifications/notification");
exports.MakeNotification=async ({title,message,userID})=>{
    if (title && message && userID) return await new Notification({ userID, title, message }).save();
    return  {};
};

exports.SendNotificationToAll=async (notificationID)=>{
    if (notificationID) return await User.updateMany({},{$push:{notifications:notificationID}});
    return {};
};
exports.SendNotificationToUser=async ({userID,notificationID})=>{
    if (notificationID && userID) return await User.findByIdAndUpdate(userID,{$push:{notifications:notificationID}});
    return {};
};