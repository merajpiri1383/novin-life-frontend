
export interface ProductType {
    comments_count?: number,
    commission?: number,
    content?: string,
    created_at?: string,
    dislikes_count?: number,
    expert_review?: string,
    id?: number,
    index_image?: {
        file_name?: string,
        id?: number,
        mime_type?: string,
        name?: string,
        original_url?: string,
        size?: number,
        uuid?: string,
    },
    likes_count?: number,
    post_price?: number,
    price?: number,
    product_category?: {
        active?: boolean,
        created_at?: string,
        id?: number,
        name?: string,
        priority?: number,
        products_count?: number,
        slug?: string,
        summary?: string,
        updated_at?: string,
    },
    product_category_id?: number,
    quantity?: number,
    slug?: string,
    status?: string,
    summary?: string,
    title?: string,
    unit?: string,
    updated_at?: string,
    user_id?: number,
    views_count?: number,
};



export interface CartProductType {
    cart_id?: number,
    created_at?: string,
    discount?: number,
    id?: number,
    post_price?: number,
    price?: number,
    product?: ProductType,
    product_id?: number,
    product_title?: string,
    quantity?: number,
    total_price?: number,
    total_price_discounted?: number,
    unit?: string,
    updated_at?: string,
};


export interface SummaryType {
    discount: number,
    final_total: number,
    items_count: number,
    total_post_price: number,
    total_price: number,
}


export interface CartType {
    company_id ?: number,
    created_at ?: string,
    customer_id ?: number,
    discount ?: number,
    discount_code ?: string,
    id ?: number,
    items ?: CartProductType[],
    summary ?: SummaryType,
}