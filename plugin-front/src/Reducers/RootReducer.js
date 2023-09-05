import { persistReducer } from "redux-persist"; // 추가
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const initialState = {
    userData: {},
};

const rootReducer = (state = initialState, action) => {
    let temp = { ...state };
    switch (action.type) {
        case "SET_VISIBLE_HEADER":
            temp.userData = action.payload;
            return temp;
        case "CLEAR_VISIBLE_HEADER":
            temp.userData = {};
            return temp;
        default:
            return state;
    }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
