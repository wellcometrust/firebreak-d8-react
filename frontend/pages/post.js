import Layout from '../components/Layout';
import { BASE_URL } from '../config';


const Post = (props) => (
    <Layout>
        <article className='grid-container'>
        <h1>{props.article.attributes.title}</h1>
        <img className="article__image" src={`${BASE_URL}/${props.img.attributes.uri.url}`}/>
        <div className="article__copy" dangerouslySetInnerHTML={{__html: props.article.attributes.main_text.value}} />
        </article>
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`${BASE_URL}/api/node/news/${id}`);
    const article = await res.json();

    const resImg = await fetch(`${BASE_URL}/api/node/news/${id}/main_image`);
    const img = await resImg.json();

    return {
        article: article.data,
        img: img.data
    };
};



export default Post;