export const TOGGLE_THEME = "TOGGLE_THEME";

export const themeReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme,
            };
        default:
            return state;
    }
};

export const initialState = {
    isDarkTheme: false,
};
