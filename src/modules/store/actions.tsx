import {
    SET_RECIPES,
    ADD_RECIPE,
    REMOVE_RECIPE,
    SET_ERROR,
} from './actionTypes';

export const setStoreRecipesAction = (recipes: any) => ({
    type: SET_RECIPES,
    payload: { recipes },
});

export const addStoreRecipeAction = (key: String) => ({
    type: ADD_RECIPE,
    payload: { key },
});

export const deleteStoreRecipeAction = (key: String) => ({
    type: REMOVE_RECIPE,
    payload: { key },
});

export const setStoreErrorAction = (error: any) => ({
    type: SET_ERROR,
    payload: { error },
});