import Header from './Header';
import Meta from './Meta';

const Layout = (props) => (
    <div className="page">
        <Meta />
        <Header />
        <div className="container main">
            {props.children}
        </div>

        <style jsx>{`
       .page {
       margin: 0;
       padding: 0;
       }

       .container {
       max-width: 1200px;
       margin: 20px auto;
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       grid-template-areas:
            'main main main main'
            'news news news events';

       }

    `}</style>

    </div>
);

export default Layout;