const express = require("express");
const Board = require("../models/Board");
const router = express.Router();

// router.get("/", function (req, res, next) {
//   console.log("router /board 실행");
//   res.send("This is Board입니다.");
// });

router.post("/", async function (req, res) {
  /**
   * 1. req body로 '게시글 제목'과 '게시글 내용'을 받는다.
   * 2. mongoose를 이용해 저장한다.
   * 3. response를 만들어 준다.
   */
  const data = req.body;
  console.log(data);

  const board = await Board.create({
    title: data.title,
    content: data.content,
  });

  res.json(board);
});

router.get("/", async function (req, res) {
  // 쿠키를 사용해보아요
  const cookies = req.cookies;
  console.log("요청 쿠키", cookies);

  // 쿠키 설정 (set-cookie HTTP-header)
  const boards = await Board.find();
  res.cookie("cookieName", "cookieValue");
  res.cookie("SecureCookieName", "SecureCookieValue", {
    httpOnly: true,
  });

  res.json(boards);
});

// id로 조회
router.get("/:boardId", async (req, res) => {
  console.log(req.params);
  const { boardId } = req.params;
  const board = await Board.findById(boardId);

  // Session 사용법
  // req.session

  if (req.session.viewCount) {
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }

  req.session.profile = {
    id: 1,
    name: "yujin",
  };
  console.log("viewCount: ", req.session.viewCount);
  console.log("req.session: ", req.session);

  res.json(board);
});

/**
 * PUT  /:resourceId: 특정 resource 수정
 * DELETE /:resourceId: 특정 resource 삭제
 */

router.put("/:boardId", async (req, res) => {
  const { boardId } = req.params;
  const updateData = req.body;
  const board = await Board.findById(boardId);
  board.title = updateData.title;
  board.content = updateData.content;
  await board.save();

  res.json(board);
});

router.delete("/:boardId", async (req, res) => {
  const { boardId } = req.params;
  // const board = await Board.findById(boardId);
  const board = await Board.findByIdAndDelete(boardId);

  res.json(board);
});

module.exports = router;
