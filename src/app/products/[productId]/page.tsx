
 type productType = {
params: {productId: string}

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