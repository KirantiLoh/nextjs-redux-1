import { clearCart } from "redux/slices/cartSlice"
import { closeModal, getModalStatus } from "redux/slices/modalSlice"
import { useSelector, useDispatch } from "react-redux"

const Modal = () => {

    const isOpen = useSelector(getModalStatus)
    const dispatch = useDispatch()

    return (
        <aside>
            <div className={`transition duration-300 p-4 absolute top-[50%] ${isOpen  ? "left-[50%]" : "left-[-150%]"} translate-x-[-50%] translate-y-[-50%] rounded bg-zinc-800 text-white z-10`}>
                <h3 className="text-2xl text-center">Remove all items from your shopping cart?</h3>
                <div className="flex items-center justify-between">
                    <button onClick={() => {
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }} className="px-4 py-3 m-1 text-teal-400 rounded">Confirm</button>
                    <button onClick={() => dispatch(closeModal())} className="px-4 py-3 m-1 transition duration-300 bg-teal-600 rounded hover:opacity-75">Cancel</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal