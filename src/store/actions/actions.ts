import { createSelector } from "@reduxjs/toolkit";
import type { State } from "../type/type.ts";

interface StateSelector {
    main: State
}

const state  = (state: StateSelector) => state.main;

export const apiSelector = createSelector(
    state,
    (main: State) => main.data
)

export const loadingSelector = createSelector(
    state,
    (main: State) => main.loading
)

export const errorSelector = createSelector(
    state,
    (main: State) => main.error
)

