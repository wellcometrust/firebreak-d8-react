import Layout from '../components/Layout';
import { BASE_URL } from '../config';

const Event = (props) => (
    <Layout>
        <article className='grid-container'>
        <h1>{props.event.attributes.title}</h1>
        <img className="article__image" src={`${BASE_URL}/${props.img.attributes.uri.url}`}/>
        <div className="article__copy" dangerouslySetInnerHTML={{__html: props.event.attributes.main_text.value}} />
        </article>
    </Layout>
);

Event.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`${BASE_URL}/api/node/events/${id}`);
    const event = await res.json();

    const resImg = await fetch(`${BASE_URL}/api/node/events/${id}/main_image`);
    const img = await resImg.json();

    return {
        event: event.data,
        img: img.data
    };
};

export default Event;