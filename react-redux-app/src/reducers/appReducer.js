import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";

export const initialState = {
    launches: [],
    error: null,
    isLoading: false
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FEATURE":
            return {
                ...state,
            }
        case "REMOVE_FEATURE":
            return {
                ...state,
            };
        default:
            return state;
    }
};