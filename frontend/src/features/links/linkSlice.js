import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import linkService from './linkService'

const initialState = {
    links: {},
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
    reducers: {
        initialize: state => linkService.getLinks(initialState)
    },
    extraReducers: builder => {
        builder
            .addCase(addLink.pending, state => {
                state.isLoading = true
            })
            .addCase(addLink.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.links[action.payload.result.original_link] = action.payload.result.full_short_link
            })
            .addCase(addLink.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {initialize} = linkSlice.actions
export default linkSlice.reducer