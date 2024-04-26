import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	currentAccount: {
		id: 1,
		username: 'ozgurenes',
		fullName: 'Özgür Enes',
		avatar: 'https://pbs.twimg.com/profile_images/1783853206440722433/VJvXCQXd_400x400.jpg'
	},
	accounts: [
        {
			id: 1,
			username: 'ozgurenes',
			fullName: 'Özgür Enes',
			avatar: 'https://pbs.twimg.com/profile_images/1783853206440722433/VJvXCQXd_400x400.jpg'
		},
		{
			id: 2,
			username: 'gokyuzunden',
			fullName: 'Gökyüzünden Notlar',
			avatar: 'https://pbs.twimg.com/profile_images/1427235267249942530/N8G4fUHV_400x400.jpg'
		}
    ]
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// state manipule etme metodlari
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
		}
	}
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer