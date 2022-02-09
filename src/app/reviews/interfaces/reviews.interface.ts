export interface PostedReview {
    data?: {
        review_values: {
            returning: Review[];
        }
    };
    errors?: any;
}

export interface ReviewResult {
    data?: {
        review_values: Review[];
    };
    errors?: any;
}

export interface Review {
    id: number;
    data: {
        title: string;
        creator: string;
        media_type: string;
        review_comments: string;
        star_rating: number;
    }
    created_datetime?: string;
}