const mongoose = require("mongoose");
const DB_URL =
  "mongodb+srv://admin:admin1234@cluster0.kikbrh5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Cat = require("./models/Cat");

async function main() {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("연결완료");
    })
    .catch((err) => {
      console.log(err);
    });

  // 데이터 생성
  //   const cat = await Cat.create({
  //     name: "야옹이",
  //   });
  //   console.log(cat);

  // insertMavy
  //   const result = await Cat.insertMany([{ name: "나비" }, { name: "부엉이" }]);
  //   console.log(result);

  // 조회(find, findOne, findById)
  //   const cat1 = await Cat.find({ name: "야옹이" }); // 데이터 일치하는 것 조회
  //   console.log(cat1);

  //   const cat2 = await Cat.find(); // 전체 조회
  //   console.log(cat2);

  //   const cat3 = await Cat.findOne({ name: "나비" }); // 데이터 일치하는 것 1개 조회
  //   console.log(cat3);

  //   const cat4 = await Cat.findById("684ba6d3e244dd2cafecb0bc"); // id로 조회
  //   console.log(cat4);

  // 삭제
  //   const result = await Cat.deleteMany({
  //     name: "야옹이",
  //   });
  //   console.log(result);

  // update
  const result = await Cat.updateOne({ name: "부엉이" }, { name: "meow" });
  console.log(result);
}

main();
