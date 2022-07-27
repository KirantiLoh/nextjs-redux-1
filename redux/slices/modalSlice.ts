import { RootState } from './../store';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions

export const getModalStatus = (state: RootState) => state.modal.isOpen

export default modalSlice.reducer
