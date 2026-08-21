import { createSlice } from "@reduxjs/toolkit";
export const searchslices = createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTabs:'photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActiveTabs(state,action){
            state.activeTabs = action.payload
        },
        setResults(state,action){
            state.results = action.payload
            state.loading = false
        },
        setLoading(state,action){
            state.loading = true
            state.error = null
        },
        setError(state,action){
            state.error = action.payload
            state.loading = false
        }
    }
})
export const {setQuery,setResults,setActiveTabs,setError,setLoading}=searchslices.actions
export default searchslices.reducer