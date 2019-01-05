const express = require("express");
const router = express.Router({mergeParams: true})//allows to get access of id instide of router?

const { createMessage, getMessage, deleteMessage } = require("../handlers/messages")

router.route("/").post(createMessage);
router
    .route("/:message_id")
    .get(getMessage)
    .delete(deleteMessage)


module.exports = router;