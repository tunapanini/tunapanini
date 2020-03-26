import {createAction, handleActions} from 'redux-actions';

// Action Type
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// Create Action Function
// export const increment = () => ({type: INCREMENT});
// export const decrement = () => ({type: DECREMENT});

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
	number : 0,
};

// reducer
// export default function reducer(state=initialState, action) {
// 	switch(action.type){
// 		case INCREMENT:
// 			return { number: state.number + 1};
// 		case DECREMENT:
// 			return {numnber: state.numnber - 1};
// 		default:
// 			return state;
// 	}
// }

export default handleActions({
	[INCREMENT]: (state, action) => {
		return {number: state.number + 1};
	},
	[DECREMENT]: ({number}) => {
		return {number: number - 1};
	}
}, initialState);
