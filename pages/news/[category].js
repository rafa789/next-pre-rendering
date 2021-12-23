function ArticleListByCategory({articles, category}) {
    return (
        <>
            <h1>Showing News for Category <i>{category}</i> </h1>
            {
                articles.map(article =>{
                    return(
                        <div key={article.id}>
                            <h2>
                             {article.id} {article.title}
                            </h2>
                            {article.description}
                        </div>
                    )
                })
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const {params, req, res} = context
    console.log(req.headers.cookie);
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props:{
            articles:data,
            category,
        }
    }
}