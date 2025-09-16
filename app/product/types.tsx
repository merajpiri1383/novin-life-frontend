

export interface ProductDetailType {
    id?: number,
    title?: string,
    slug?: string,
    summary?: string,
    content?: string,
    price?: number,
    quantity?: number,
    unit?: string,
    expert_review?: string,
    direct_post?: string,
    call_price_active?: string,
    commission?: number,
    post_price?: number,
    rating?: number,
    views_count?: number,
    comments_count?: number,
    likes_count?: number,
    dislikes_count?: number,
    status?: string,
    created_at?: string,
    updated_at?: string,
    category?: {
        id: number,
        title: string,
        slug: string,
    },
    user?: {
        id: number,
        title: string,
        email: string,
    },
    images?: {
        id: number,
        url: string,
        thumb_url: string,
    }[],
    index_image?: {
        id: number,
        url: string,
        thumb_url: string
    }
}


export interface RelatedProductType {
    id?: number,
    title?: string,
    slug?: string,
    price?: number,
    summary?: string,
    rating?: number,
    views_count?: number,
    comments_count?: number,
    likes_count: number,
    dislikes_count: number,
    images?: {
        id: number,
        url: string,
        thumb_url: string,
    }[],
    index_image?: {
        id: number,
        url: string,
        thumb_url: string
    }
}


export interface ProductType {
    category ?: {
        id : number,
        name : string,
        slug : string,
    },
    comments_count ?: number,
    created_at ?: string,
    dislikes_count ?: number,
    id : string,
    images : {
        id : number,
        thumb_url : string,
        url : string,
    }[],
    index_image ?: {
        id : number,
        thumb_url : string,
        url : string,
    },
    likes_count ?: number,
    price ?: number,
    quantity ?: number,
    rating ?: number,
    slug ?: string,
    status ?: string,
    summary ?: string,
    title ?: string,
    unit ?: string,
    views_count ?: number,
}

export interface PaginationType {
    current_page ?: number,
    from ?: number,
    has_more_pages : boolean,
    last_page ?: number,
    per_page ?: number,
    to ?: number,
    total ?: number,
}


export type ProductsFilterResponseType = {
    pagination : PaginationType,
    products : ProductType[],
    status : boolean,
}