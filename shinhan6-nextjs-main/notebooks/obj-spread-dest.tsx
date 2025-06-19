const arr = [1, 2];
const [a1, a2] = arr;
// a1?: 1, a2?: 2

const arr2 = [1, 2, 3, 4];
const [a3, a4, ...a5] = arr2;
// a3?: 1, a4?: 2, a5?: [3, 4]

const arr3 = [1, 2];
const [a6, a7, a8] = arr3;
// a6?: 1, a7?: 2, a8?: undefined

const arr4 = [1, 2, 3];
const arr5 = ["a", "b", "c", ...arr4];
const arr6 = ["a", "b", "c", arr4];
// arr5 = ["a", "b", "c", 1, 2, 3]
// arr6 =  ["a", "b", "c", [1, 2, 3]];
// arr5.length?: 6  // arr6.length?: 4

const obj1 = {
  username: "신윤수",
  city: "seoul",
  height: 170,
  weight: 70,
  getProfile() {
    return `${this.username} ${this.city}`;
  },
} as any;

let { sample } = obj1; // sample의 값?: undefined
let { username, ...others } = obj1;
// username?: 신윤수, others? :

const obj2 = {
  username: "신윤수",
  city: "seoul",
  height: 170,
  weight: 70,
  getProfile() {
    return `${this.username} ${this.city}`;
  },
} as any;
const { city, height: h } = obj2;
// city?: seoul, height?: , h?: 170

const obj3 = {
  obj2,
  username: "김민수",
};
// obj3의 key 개수?: 2
const obj4 = {
  ...obj2,
  username: "김민수",
};
//  obj4의 key 개수? username, city, height, weight, getProfile
const obj5 = {
  ...obj2,
  sample: "hi",
}; // obj5의 key의 개수? 6개
