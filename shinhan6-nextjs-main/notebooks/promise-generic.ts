type Sample = {
  id: number;
  name: string;
};

const a: Sample = {
  id: 1,
  name: "신윤수",
};

console.log(a.id);
console.log(a.name);

// Promise가 resolve될 데이터타입이 Sample
// ==> Promise<Sample>

const promise1: Promise<Sample> = new Promise((resolve) => {
  const obj1: Sample = {
    id: 1,
    name: "신윤수",
  };
  resolve(obj1);
});

async function sampleFunc() {
  const result = await promise1;
  console.log(result.id);
  console.log(result.name);
}

promise1.then((data) => {
  console.log(data.id);
  console.log(DataTransfer.name);
  console.log(data);
});

// const b: Promise<Sample> = new Promise((resolve, reject) => {
//   resolve({
//     id: 1,
//     name: "신윤수",
//   });
// });

// console.log(b.id);
