// App.js

// Reactライブラリをインポート
import React from 'react'; 

// 商品リストコンポーネントをインポート
import ProductList from './Components/ProductList'; 

// ショッピングカートコンポーネントをインポート
import ShoppingCart from './Components/ShoppingCart'; 

// アプリケーションのスタイルシートをインポート
import './App.css'; 

// Appコンポーネントを定義
const App = () => { 
  return (
    // アプリ全体をラップするdiv要素
    <div>
      {/* アプリケーションの見出し */}
      <h1 className='app-heading'>E-Commerce Application</h1> 
      {/* 商品リストコンポーネントをレンダリング */}
      <ProductList /> 
      {/* ショッピングカートコンポーネントをレンダリング */}
      <ShoppingCart /> 
    </div>
  );
};

// Appコンポーネントをエクスポート
export default App; 
