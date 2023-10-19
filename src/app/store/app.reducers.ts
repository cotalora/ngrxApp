import { ActionReducerMap } from "@ngrx/store";
import { colorReducer } from "./reducers/color.reducers";
import { AppState } from "../interfaces";

export const appReducers: ActionReducerMap<AppState> = {
    color: colorReducer
}