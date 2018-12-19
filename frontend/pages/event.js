import Layout from '../components/Layout';

const Event = (props) => (
    <Layout>
        <h1>{props.event.attributes.title}</h1>
        <p>{props.event.attributes.main_text.value}</p>

        <style jsx>{`
        h1 {
         grid-area: main;
        }

    `}</style>
    </Layout>
);

Event.getInitialProps = async function (context) {
    const { id } = context.query;
    const ngrok = 'http://cbc139ec.ngrok.io';
    const res = await fetch(`${ngrok}/api/node/events/${id}`);
    const event = await res.json();

    return { event: event.data };
};

export default Event;