import { useCallback, useState } from "react";
import { MemoizedButton } from "./RegularButton";

export default function CallbackExample() {
  const [count, setCount] = useState(0);
  const [itemQty, setItemQty] = useState(1);

  console.log("ParentComponentForCallback is rendering!");

  const handleAddToCartWithoutCallBack = () => {
    console.log(`[useCallback X] ${itemQty} 를 장바구니에 담았습니다.`);
  };

  const handleAddToCartWithCallBack = useCallback(() => {
    console.log(`[useCallback O] ${itemQty}를 장바구니에 담았습니다.`);
  }, [itemQty]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Parent State 증기 (Count : {count})
      </button>
      <button
        onClick={() => setItemQty((q) => q + 1)}
        style={{ marginLeft: "10px" }}>
        상품 수량 변경 (Qty: {itemQty})
      </button>

      <MemoizedButton onClick={handleAddToCartWithoutCallBack}>
        장바구니에 담기 (useCallback X)
      </MemoizedButton>

      <MemoizedButton onClick={handleAddToCartWithCallBack}>
        장바구니에 담기 (useCallback O)
      </MemoizedButton>
    </div>
  );
}
