const mongoose = require("mongoose");
const DB_URL = "";

const Cat = require("./models/Cat");
const Movie = require("./models/Movie");
const Review = require("./models/Review");

async function main() {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("연결완료");
    })
    .catch((err) => {
      console.log(err);
    });

  //   const movie = await Movie.create({
  //     title: "영화1",
  //     director: "신윤수",
  //     startDate: "2017-01-18",
  //     thumbnail:
  //       "https://an2-img.amz.wtchn.net/image/v2/W-6OOBFuHj6lBaBEfctSjw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjV5YW5kaE5uaDFZbWx2WW5kbmJuWjVZM0J3SW4wLlVxRm83bHNuaHU3dzc5aXBIVlYtU2prUFQxY29JYWV2TUdMNDBLaVg5eTQ",
  //     story:
  //       "비밀리에 제작된 위조 지폐 동판을 탈취하려는 내부 조직에 의해 작전 중 아내와 동료들을 잃게 된 특수 정예부대...",
  //     tags: [2017, "액션", "한국"],
  //   });
  //   console.log(movie);

  //   const review = await Review.create({
  //     writer: "코코",
  //     movie: "684bb2a11abb478411d553eb",
  //     title: "재미없네요",
  //     content: "재미있다더니",
  //   });
  //   console.log(review);

  //   const review = await Review.find().populate("movie");
  //   console.log(review);

  const movie = await Movie.findOne().populate("reviews");
  console.log(movie);
}

main();
