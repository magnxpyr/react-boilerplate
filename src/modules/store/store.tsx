import React, { createContext, useEffect, useReducer } from 'react';
import Reducer from './reducer';
import { SET_RECIPES, SET_ERROR } from './actionTypes';

const initialState = {
    recipes: [],
    error: null,
    loading: true,
};

const apiURL = `https://jsonblob.com/api/jsonBlob/fddd0cec-8e0e-11ea-82f0-13fba022ad5b`;
const StoreContext = createContext(initialState);

// @ts-ignore
const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const fetchRecipe = async () => {
        try {
            const recipeData = await fetch(apiURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { results } = await recipeData.json();
            // console.log(results);
            dispatch({ type: SET_RECIPES, payload: results });
        } catch (error) {
            if (error) {
                // console.log(error);
                dispatch({ type: SET_ERROR, payload: error });
            }
        }
    };

    useEffect(() => {
        fetchRecipe();
    }, []);

    return (
        <StoreContext.Provider value={state}>
            {children}
        </StoreContext.Provider>
    );
};

const StoreConsumer = StoreContext.Consumer;

export { Store, StoreConsumer, StoreContext };