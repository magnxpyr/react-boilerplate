import {
    SET_RECIPES,
    ADD_RECIPE,
    REMOVE_RECIPE,
    SET_ERROR,
} from './actionTypes';

const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                loading: false,
            };
        case ADD_RECIPE:
            return {
                ...state,
                recipes: state.recipes.concat(action.payload),
            };
        case REMOVE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(
                    (recipe: any) => recipe.id !== action.payload
                ),
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: true,
            };
        default:
            return state;
    }
};

export default Reducer;