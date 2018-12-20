import Link from 'next/link';


const MainStory = () => (
    <div className="story-wrapper">
    <img src="https://trustnet.wellcome.ac.uk/sites/default/files/styles/int_news_large/public/Camden%20Foodbank%20Sorting_%20Dec%204th_1.jpg?itok=HuEAcDN6&c=257f2c8071e64c9cd048d3d5395bf22d" alt="" />
        <div className='story-wrapper__text'>
    <h1>
    <Link href="https://trustnet.wellcome.ac.uk/news/festive-volunteering-what-difference-you-made-%F0%9F%98%8A">
        <a>Festive volunteering: What a difference you made 😊</a>
    </Link>
    </h1>
    </div>

    <style jsx>{`
    .story-wrapper {
       display: flex;
       flex-direction: row;
       height: 280px;
       margin-bottom: 40px;
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
    font-family: 'Wellcome-Bold';
    font-size: 32px;
    line-height: 40px;
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