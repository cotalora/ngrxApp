import { createReducer, on } from "@ngrx/store";
import { enableAnotherColor } from "../actions/color.actions";
import { ColorState } from "src/app/interfaces/color-state.interface";

export const colorInitialState: ColorState = { enable: false };

export const colorReducer = createReducer(
    colorInitialState,
    on(enableAnotherColor, (state) => ({ ...state, enable: !state.enable }))
)