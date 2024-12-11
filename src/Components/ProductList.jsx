// Reactライブラリから必要な機能をインポート
import React, { useState } from 'react'; 
// ReduxのuseDispatchフックをインポート
import { useDispatch, useSelector } from 'react-redux'; 
// カートにアイテムを追加するためのアクションをインポート
import { addItemToCart } from './CartSlice'; 
// コンポーネント固有のスタイルを適用するためのCSSファイルをインポート
import './ProductList.css'; 

// ProductListコンポーネントの定義
const ProductList = () => { 
  // Reduxのdispatch関数を取得
  const dispatch = useDispatch(); 
  // Redux ストアから disabledProducts を取得
  const disabledProducts = useSelector(state => state.cart.disabledProducts); // Redux から取得


  // 商品リストのデータ（商品ID、名前、価格を含む）
  const products = [
    { id: 1, name: 'Product A', price: 60 }, 
    { id: 2, name: 'Product B', price: 75 }, 
    { id: 3, name: 'Product C', price: 30 }, 
  ];

  // カートに商品を追加する際のハンドラー関数
  const handleAddToCart = product => { 
    // Reduxストアに商品の追加アクションをディスパッチ
    dispatch(addItemToCart(product)); 
    // 該当する商品を「追加済み」にするためにIDを追加
    //setDisabledProducts([...disabledProducts, product.id]); 
  };

  // コンポーネントの描画内容を定義
  return (
    // コンポーネント全体をラップするdiv要素
    <div className="product-list"> 
      {/* 商品リストの見出し */}
      <h2 className="product-list-title">Products</h2> 
      {/* 商品リストを表示するul要素 */}
      <ul className="product-list-items"> 
        {/* 商品ごとのリストアイテムをmapで生成 */}
        {products.map(product => (
          // 各商品ごとに一意のキーを設定
          <li key={product.id} className="product-list-item"> 
            {/* 商品名と価格を表示 */}
            <span>{product.name} - ${product.price}</span> 
            {/* カート追加ボタン */}
            <button 
              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`} 
              onClick={() => handleAddToCart(product)} // ボタンがクリックされたときにhandleAddToCartを実行
              disabled={disabledProducts.includes(product.id)} // ボタンの状態を管理
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// このコンポーネントを他のモジュールで使用可能にする
export default ProductList; 
