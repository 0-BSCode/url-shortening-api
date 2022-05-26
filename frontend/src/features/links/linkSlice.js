import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import linkService from './linkService'

const initialState = {
    links: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const addLink = createAsyncThunk('links/addLink', async (link, thunkAPI) => {
    try {
        return await linkService.shorten(link)
    } catch (e) {
        const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const linkSlice = createSlice({
    name: 'link',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(addLink.pending, state => {
                state.isLoading = true
            })
            .addCase(addLink.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.links.push(action.payload)
            })
            .addCase(addLink.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export default linkSlice.reducer