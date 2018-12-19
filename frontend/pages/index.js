import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import MainStory from '../components/MainStory';

const Index = (props) => (
    <Layout>
        <MainStory/>
        <div className='news'>
        <h2>News</h2>
        <ul>
            {props.news.map((article) => (
                <li key={article.uuid[0].value}>
                    <Link href={`/news/${article.uuid[0].value}`}>
                        <h3><a>{article.title[0].value}</a></h3>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
        <div className='events'>
        <h2>Events</h2>
        <ul>
            {props.events.map((event) => (
                <li key={event.uuid[0].value}>
                    <Link href={`/events/${event.uuid[0].value}`}>
                        <h3><a>{event.title[0].value}</a></h3>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
        <style jsx>{`
       .news {
        grid-area: news;
       }

       .events {
        grid-area: events;
       }

       ul {
          list-style-type: none;
          padding: 0;
       }
       li {
        cursor: pointer;
       }
       li:hover {
       text-decoration: underline;
       }

       h3 {
       font-weight: normal;
       }
    `}</style>
    </Layout>
);

Index.getInitialProps = async function() {
    const ngrok = 'http://cbc139ec.ngrok.io';
    const res = await fetch(`${ngrok}/rest/news?_format=json`);
    const data = await res.json();

    const resEv = await fetch(`${ngrok}/rest/events?_format=json`);
    const dataEv = await resEv.json();

    return {
        news: data,
        events: dataEv
    };
};

export default Index;