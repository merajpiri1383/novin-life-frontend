

export interface SliderType {
    image: string,
    url: string,
}

export interface ProductMainType {
    title?: string,
    slug?: string,
    image?: string,
    summary?: string | null,
    score?: string,
    price?: string
}

export interface MainPageType {
    output: {
        newest: ProductMainType[],
        slider: SliderType[],
        bestseller: ProductMainType[],
    },
    status: boolean,
}