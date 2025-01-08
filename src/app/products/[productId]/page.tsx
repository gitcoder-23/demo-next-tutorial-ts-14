
 type productType = {
params: {productId: string}

}

export default function ProductNewDetails({ params }: productType) {
    return (

        <>
             
            <h2>New DynamicProduct Details Data { params.productId}</h2>     
        </>
    );
};