import React, { useState, useMemo } from "react";

// 소수를 계산하는 함수
function calculatePrimes(limit) {
  console.log(`limit: ${limit} 에 대한 소수 계산`);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

export default function PrimeCalculator(props) {
  const [limit, setLimit] = useState(10);
  const [toggle, setToggle] = useState(false);

  //   const primes = calculatePrimes(limit); // useMemo 사용 안할 때
  // 전혀 상관없는 부분을 건드려도 다시 계산됨 -> 비효율적

  const primes = useMemo(() => calculatePrimes(limit), [limit]);

  return (
    <div>
      <button
        onClick={(e) => {
          setToggle((prev) => !prev);
        }}>
        버튼
      </button>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>계산된 소수: {primes.join(", ")}</p>
    </div>
  );
}
