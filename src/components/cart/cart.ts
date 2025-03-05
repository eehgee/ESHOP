import { atom } from "recoil"
import {ProductInfo} from "../../store/products"

export const cartState = atom<ProductInfo[]>({
    key : "cartState",
    default : [],
})