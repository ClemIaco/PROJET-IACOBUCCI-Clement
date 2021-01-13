export class ProductFilter {
    public titleFilter: string;
    public minPriceFilter: number;
    public maxPriceFilter: number;

    constructor(titleFilter: string, minPriceFilter: number, maxPriceFilter: number)
    {
        this.titleFilter = titleFilter;
        this.minPriceFilter = minPriceFilter;
        this.maxPriceFilter = maxPriceFilter;
    }
}
