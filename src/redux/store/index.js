const { configureStore } = require("@reduxjs/toolkit");
const authReducer  = require("../slice/auth-slice")


const store = configureStore({
    reducer: {
        auth : authReducer 
    }
})

export default store;