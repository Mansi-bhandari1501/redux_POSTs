import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    comments:[],
    isLoading:true,
    error:null
}

export const fetchComments = createAsyncThunk(
    'comment/fetchComments',
    async(id)=>{
        const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await res.data;
        console.log(data)
        return {id:id,
        data:data};
    }
)
export const commentSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchComments.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchComments.fulfilled,(state,action)=>{
            state.isLoading=false
            state.comments[action.payload.id]=action.payload.data
        })
        builder.addCase(fetchComments.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
    },
});
export default commentSlice.reducer;