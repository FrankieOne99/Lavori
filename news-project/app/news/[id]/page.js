
const NewsDetail = ({params}) => {
const newsId= params.id
 
    return (
        <div>
        <h1>This is the news detail page! </h1>
        <h2>NEWS ID: {newsId}</h2>

        </div>
    )
}

export default NewsDetail; 