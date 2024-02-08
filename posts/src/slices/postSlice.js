import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    contents:[],
    isLoading:true,
    error:null
}

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async()=>{
        const res = await axios("https://jsonplaceholder.typicode.com/posts");
        const data = await res.data;
        return data;
    }
)
export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
        })
        builder.addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
    },
});
export default postSlice.reducer;