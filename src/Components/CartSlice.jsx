// Redux ToolkitからcreateSliceをインポート
import { createSlice } from '@reduxjs/toolkit';

// カートの初期状態を定義
const initialState = {
    cartItems: [], // カートに追加された商品のリスト（初期値は空配列）
    disabledProducts: [], // 追加済み商品の ID を管理
};

// カートに関するSliceを作成
const CartSlice = createSlice({
    // このSliceの名前（アクションタイプに使用される）
    name: 'cart', 
    // 初期状態を設定
    initialState, 
    // カート操作のためのreducer関数を定義
    reducers: {
        // 商品をカートに追加するアクション
        addItemToCart(state, action) { 
            // 既存のカートアイテムの中から、同じIDの商品を検索
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                // 同じ商品がすでに存在する場合は数量を1増やす
                existingItem.quantity += 1; 
            } else {
                // 商品が存在しない場合は新規でカートに追加し、数量を1に設定
                state.cartItems.push({ ...action.payload, quantity: 1 }); 
                state.disabledProducts.push(action.payload.id); // 該当商品を追加済みとして記録
            }
        },
        // 商品をカートから削除するアクション
        removeItemFromCart(state, action) { 
            // 指定されたIDの商品を除外した新しい配列でカートアイテムを更新
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); 
            state.disabledProducts = state.disabledProducts.filter(id => id !== action.payload.id); // 解除
        },
        // カート内の全商品をクリアするアクション
        clearCart(state) { 
            // カートを空の配列にリセット
            state.cartItems = []; 
            state.disabledProducts = []; // すべて解除
        },
        // 商品の数量を増加させるアクション
        increaseItemQuantity(state, action) { 
            // 指定されたIDの商品を検索
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload.id); 
            if (itemToIncrease) {
                // 該当する商品の数量を1増加
                itemToIncrease.quantity += 1; 
            }
        },
        // 商品の数量を減少させるアクション
        decreaseItemQuantity(state, action) { 
            // 指定されたIDの商品を検索
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id); 
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                // 該当する商品の数量が1以上の場合に1減少
                itemToDecrease.quantity -= 1; 
            }
        },
    }
});

// 各アクションをエクスポート
export const {
  addItemToCart, // 商品追加
  removeItemFromCart, // 商品削除
  clearCart, // カートクリア
  increaseItemQuantity, // 商品数量増加
  decreaseItemQuantity, // 商品数量減少
} = CartSlice.actions;

// CartSliceのreducerをデフォルトエクスポート
export default CartSlice.reducer;
