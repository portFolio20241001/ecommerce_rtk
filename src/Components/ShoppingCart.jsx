// Reactをインポート
import React from 'react';
// ReduxのuseDispatchとuseSelectorをインポート
import { useDispatch, useSelector } from 'react-redux';
// CartSliceからアクションクリエーターをインポート
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
// CSSファイルをインポート（ShoppingCartコンポーネント用のスタイル）
import './ShoppingCart.css';

// ショッピングカートコンポーネントの定義
const ShoppingCart = () => {
  // Reduxのdispatch関数を取得
  const dispatch = useDispatch();

  // ReduxストアからcartItemsを取得
  // useSelectorは、React-Reduxのフックで、Reduxストアの状態をReactコンポーネント内で取得するために使用します。
  //これにより、ストア内の状態（cartItems）がコンポーネント内で利用できるようになります。
  //React-Redux の useSelector フックを使うと、ストアの状態の特定部分をコンポーネントが購読します。
  //状態が変化すると、useSelector を使っているコンポーネントが自動的に再レンダリングされます。
  const cartItems = useSelector(state => state.cart.cartItems);
  
  // カート内の商品価格の合計を計算
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // 商品をカートから削除するハンドラー関数
  const handleRemoveItem = item => {
    dispatch(removeItemFromCart(item)); // 
  };

  // カートをクリアするハンドラー関数
  const handleClearCart = () => {
    dispatch(clearCart()); // clearCartアクションをディスパッチ
  };

  // 商品の数量を増やすハンドラー関数
  const handleIncreaseQuantity = item => {
    dispatch(increaseItemQuantity(item)); // increaseItemQuantityアクションをディスパッチ
  };

  // 商品の数量を減らすハンドラー関数
  const handleDecreaseQuantity = item => {
    dispatch(decreaseItemQuantity(item)); // decreaseItemQuantityアクションをディスパッチ
  };

  // JSXを返す
  return (
    <>
      {/* ショッピングカート全体を囲むdiv */}
      <div className="shopping-cart">
        {/* カートのタイトル */}
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        {/* カート内の商品をリスト表示 */}
        <ul className="cart-items">
          {/* cartItems配列をマッピングして商品ごとにリストアイテムを生成 */}
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              {/* 商品名と価格を表示 */}
              <span>{item.name} - ${item.price}</span>
              {/* 数量調整ボタンを表示 */}
              <div className="quantity-controls">
                {/* 減少ボタン */}
                <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item)}>-</button>
                {/* 現在の数量を表示 */}
                <span> {item.quantity}</span>
                {/* 増加ボタン */}
                <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item)}>+</button>
              </div>
              {/* 商品削除ボタン */}
              <button className="remove-item-btn" onClick={() => handleRemoveItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
        {/* カートクリアボタン */}
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      </div>
      {/* 合計金額の表示 */}
      <div>
        {totalAmount ? <div>'The total amount is {totalAmount}</div> : ''} {/* 合計金額が0より大きい場合のみ表示 */}
      </div>
    </>
  );
};

// ShoppingCartコンポーネントをエクスポート
export default ShoppingCart;
