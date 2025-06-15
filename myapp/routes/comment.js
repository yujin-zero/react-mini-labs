const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

router.post("/", async function (req, res) {
  /**
   * Comment 추가
   */
  const data = req.body;
  console.log(data);
  const comment = await Comment.create({
    boardId: data.boardId,
    content: data.content,
  });

  res.json(comment);
});

router.get("/", async function (req, res) {
  /**
   * Comment 가져오기
   */
  const comment = await Comment.find();
  res.json(comment);
});

router.put("/:commentId", async (req, res) => {
  /**
   * Comment 수정
   */
  const { commentId } = req.params;
  const updateData = req.body;
  const comment = await Comment.findById(commentId);
  comment.content = updateData.content;
  await comment.save();

  res.json(comment);
});

router.delete("/:commentId", async (req, res) => {
  console.log("lll");
  /**
   * Comment 삭제
   */
  const { commentId } = req.params;
  const comment = await Comment.findByIdAndDelete(commentId);

  res.json(comment);
});

module.exports = router;
