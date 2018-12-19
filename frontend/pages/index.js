import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Moment from 'react-moment';
import { BASE_URL } from '../config';

import Layout from '../components/Layout';
import MainStory from '../components/MainStory';

const Index = (props) => (

    <Layout>
        <MainStory/>
        <div className='grid-container'>
            <div className='news'>
                <h2>News</h2>
                <ul>
                    {props.news.map((article) => (
                        <li key={article.uuid[0].value}>
                            <img src={article.main_image[0].url ? article.main_image[0].url : ''}/>
                            <div className='news__text'>
                                <Link href={`/news/${article.uuid[0].value}`}>
                                    <h3><a>{article.title[0].value}</a></h3>
                                </Link>
                                <p>{article.short_description[0].value}</p>
                            </div>
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
                            <Moment format="DD MMMM">{event.event_date[0].value}</Moment>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


        <style jsx>{`
       .news {
        grid-column: 1/13;
       }

       .news li {
       margin-bottom: 40px;
       }

       .events {
        grid-column: 14/19;
       }

       .events li {
       margin-bottom: 20px;
       }

       h2 {
       margin-bottom: 20px;
       }

       ul {
          list-style-type: none;
          padding: 0;
       }

       li {
        cursor: pointer;
        margin-right: 20px;
       }

       li:hover h3 {
       text-decoration: underline;
       }

       h3 {
       margin-bottom: 0;
       }

       img {
       width: 150px;
       float: right;
       }
    `}</style>
    </Layout>

);

Index.getInitialProps = async function() {
    const res = await fetch(`${BASE_URL}/rest/news?_format=json`);
    const data = await res.json();

    const resEv = await fetch(`${BASE_URL}/rest/events?_format=json`);
    const dataEv = await resEv.json();

    return {
        news: data,
        events: dataEv
    };
};

export default Index;