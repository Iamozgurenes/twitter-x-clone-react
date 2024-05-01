import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	// backgroundColor: {
	// 	primary: '#000',
	// 	secondary: '#16181c',
	// 	third: '#273340',
	// },
	// color: {
	// 	primary: '#1d9bf0',
	// 	secondary: '#8ecdf8',
	// 	base: '#e7e9ea',
	// 	baseSecondary: '#71767b',
	// },
	// fontSize: 16

		backgroundColor: {
		primary: '#15202b',
		secondary: '#1e2732',
		third: '#263340',
	},
	color: {
		primary: '#1d9bf0',
		secondary: '#8ecdf8',
		base: '#f7f9f9',
		baseSecondary: '#8b98a5',
		
	},
	fontSize: 16
	

	}


const appearance = createSlice({
	name: 'appearance',
	initialState,
	reducers: {
		_setBackgroundColor: (state, action) => {
			state.backgroundColor = action.payload
		},
		_setColor: (state, action) => {
			state.color = action.payload
		},
		_setFontSize: (state, action) => {
			state.fontSize = action.payload
		},
	}
})

export const { _setBackgroundColor, _setColor, _setFontSize } = appearance.actions
export default appearance.reducer