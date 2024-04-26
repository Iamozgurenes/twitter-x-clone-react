import {configureStore} from "@reduxjs/toolkit";
import auth from "~/store/auth/inde";

const store = configureStore({
	reducer: {
		auth
	}
})

export default store