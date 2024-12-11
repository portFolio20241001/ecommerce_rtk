// Redux ToolkitのconfigureStore関数をインポート
//(@reduxjs/toolkitライブラリから、ストアの設定を簡単に行うためのconfigureStore関数をインポートしています。)
import { configureStore } from '@reduxjs/toolkit';

// 作成したカートのリデューサーをインポート（CartSlice.jsから）
//CartSlice.jsからcreateSlice によって作成されるリデューサー（CartSlice.reducer）をインポートしています。
import cartReducer from './Components/CartSlice';

// Reduxストアを設定する
//configureStore関数を使ってストアを作成しています。
//reducerオプションでは、＜　ストアの状態を管理　＞するためのリデューサーを設定しています。ここでは、cartという名前のキーにcartReducerを割り当てています。
const store = configureStore({
  // ストアのreducer（状態管理）を設定
  reducer: {
    // 'cart'というキーでカートのリデューサーを指定
    cart: cartReducer,
  },
});

// 設定したstoreを外部で使用できるようにエクスポート
export default store;
