import {notFound} from 'next/navigation';


type productType = {
    params: {productId: string, reviewId: string,}
    
}
    
// http://localhost:3000/products/(productId)/reviews/(reviewId)

    // http://localhost:3000/products/2/reviews/1
export default function ReviewDetail({ params }: productType) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
        }
        return (
    
            <>
                 
                <h2> Review Detail of Review id: {params.reviewId} Product id:{ params.productId}</h2>     
            </>
        );
    };