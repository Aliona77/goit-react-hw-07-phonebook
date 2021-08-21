import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import storage from "redux-persist/lib/storage";

import contactsReducer from "./phonebook-reducer";
import { contactApi } from "./phonebook-slice";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(persistConfig, contactsReducer),
//     [contactApi]
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// const persistor = persistStore(store);

// export default { store, persistor };

//===========================REDUX===============

// import contactsReducer from "./phonebook-reducer";
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
