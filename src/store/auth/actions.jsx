import store from "~/store";
import {_setCurrentAccount} from "~/store/auth/inde";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))