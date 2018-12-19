import Link from 'next/link';


const MainStory = () => (
    <div>
        <div className="story-wrapper">
        <img src="https://trustnet.wellcome.ac.uk/sites/default/files/styles/int_news_large/public/IMG-20181215-WA0007.jpg?itok=tfNHn41o&c=e66169d699847d50e1309befb8b5454b" alt="" />
            <div className='story-wrapper__text'>
        <h1>
        <Link href="/">
            <a>Festive fabulousness - including highlights of the year🌟</a>
        </Link>
        </h1>
        </div>
        </div>
        <style jsx>{`
        div {
         grid-area: main;
        }

        .story-wrapper {
           display: flex;
           flex-direction: row;
           height: 280px;
        }

        .story-wrapper__text {
           display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        img {
        width: 500px;
        margin-right: 20px;
        }

        h1 {
        grid-column: 3/5;
        }

        a {
        text-decoration: none;
        color: black;
        }

        a:hover {
        text-decoration: underline;
        }

    `}</style>
    </div>
);

export default MainStory;