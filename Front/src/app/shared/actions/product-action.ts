import { Product } from "../../shared/models/product"

export class AddProduct {
    static readonly type = "[Product] Add";
    constructor(public payload: Product) {}
}

export class DeleteProduct {
    static readonly type = "[Product] Del";
    constructor(public payload: Product) {}
}