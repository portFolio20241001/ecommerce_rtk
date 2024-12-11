// Reactライブラリをインポート
import React from 'react';
// ReactDOMをインポート。ReactコンポーネントをDOMにレンダリングするために使用
import ReactDOM from 'react-dom/client';
// アプリケーションのメインコンポーネント「App」をインポート
import App from './App.jsx';
// アプリケーション全体で利用するCSSファイルをインポート
import './index.css';
// ReduxのProviderをインポート。Reactアプリ全体にReduxストアを提供する役割を持つ
import { Provider } from 'react-redux';
// Reduxストアをインポート。グローバルな状態管理を提供する
import store from './store.js';

// ReactDOMのcreateRootメソッドを使用して、アプリケーションをHTMLの「root」要素にマウント
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictModeでラップすることで、開発時の潜在的なエラーを検出しやすくする
  <React.StrictMode>
    {/* Providerでアプリ全体をラップ。Reduxストアを子コンポーネント全体で利用可能にする 
    <Provider>:
      ReduxのProviderコンポーネントは、Reactアプリ全体にReduxの状態管理を提供します。
      storeというプロパティを指定し、アプリ全体でこのストアを共有します。*/}

    <Provider store={store}>  
      {/* アプリケーションのメインコンポーネント「App」をレンダリング */}
      <App />
    </Provider>
  </React.StrictMode>,
);
