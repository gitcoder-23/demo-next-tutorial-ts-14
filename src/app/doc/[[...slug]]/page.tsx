

// Catch all full segments using [[...slug]]
// http://localhost:3000/docs/{slug1}/{slug2}/{slug3}/
// http://localhost:3000/docs/feature1/concept1/example1

// http://localhost:3000/docs/routing/catch-all-segments


// http://localhost:3000/docs/   ==== operable 
type paramsSlugType = {
    params: {slug: string[]}
    
    }

 export default function Docs({params}: paramsSlugType) {
        
     if (params.slug?.length === 2) {
         
         return <h1>Viewing docs feature value {params.slug[0]} and concept {params.slug[1]}</h1>
     } else if(params.slug?.length === 1) {
        return <h1>Viewing docs feature New {params.slug[0]} </h1>
         
         
     }
     
     return (
            <h2>Docs Home Page</h2>     
      
        );
    };