const mongoose = require("mongoose");

// 스키마 정의
const catSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

// 스키마를 이용해 모델 정의
// mongoose.Model(<Collection이름>, <스키마>)
const Cat = mongoose.model("Cat", catSchema);
module.exports = Cat;
