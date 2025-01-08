import { Metadata } from 'next'


type productType = {
    params: {productId: string}
    
    }


// generate dynamic metadata
export const generateMetadata = async({ params }: productType): Promise<Metadata> => {
   
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
       }, 100)
    });
    return {
        // title: `Product ${params.productId}`,
        title: `Product ${title}`,
    }
}





// http://localhost:3000/products/productId(dynamic)
// http://localhost:3000/products/50
export default function ProductNewDetails({ params }: productType) {
    return (

        <>
             
            <h2>New DynamicProduct Details Data { params.productId}</h2>     
        </>
    );
};