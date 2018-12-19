import Layout from '../components/Layout';

const Post = (props) => (
    <Layout>
        <h1>{props.article.attributes.title}</h1>
        {/*<img src={props.article.relationships.main_image.data.meta.links.help.href}/>*/}
        {/*<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>*/}
        <p>{props.article.attributes.main_text.value}</p>

        <style jsx>{`
        h1 {
         grid-area: main;
        }

    `}</style>
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const ngrok = 'http://cbc139ec.ngrok.io';
    const res = await fetch(`${ngrok}/api/node/news/${id}`);
    const article = await res.json();

    return { article: article.data };
};

export default Post;