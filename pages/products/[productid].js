import { useRouter } from "next/router";

function Product({product}) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading ...</div>
    }
    return (
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr />
        </div>
    )

}

export default Product

export async function getStaticProps(context) {
    
    const {params} = context
    const response = await fetch(`http://localhost:4000/products/${params.productid}`)
    const data = await response.json()

    return {
        props : {
            product : data
        }
    }
}

export async  function getStaticPaths() {
    return {
        paths :[{params : {productid: '1'}}],
        fallback : true
    }
}