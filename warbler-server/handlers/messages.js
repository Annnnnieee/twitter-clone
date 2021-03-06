const db = require("../models/index.js")

exports.createMessage = async function(req,res,next){
    try{
        let message = await db.Message.create({
            text: req.body.text,
            user: req.params.id
        })
        let foundUser = await db.User.findById(req.params.id)
        foundUser.messages.push(message.id);
        await foundUser.save();
        let foundMessage = await db.Message.findById(message.id).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(foundMessage)
    }catch(e){
        return next(err)
    }
}

// get /api/users/id/messages/message_id
exports.getMessage = async function(req, res,next){
    try{
        let message = await db.Message.findById(req.params.message_id);
        return res.status(200).json(message);
    }catch(e){
        return next(e)
    }
}

//delete /api/users/id/messages/message_id
exports.deleteMessage = async function(req, res, next){
    try{
        let message = await db.Message.findById(req.params.message_id);
        await message.remove()
        return res.status(200).json(message);
    } catch (e) {
        return next(e)
    }
}