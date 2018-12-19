import Header from './Header';
import Meta from './Meta';

const Layout = (props) => (
    <div className="page">
        <Meta />
        <Header />
        <div className="container main">
            {props.children}
        </div>
    </div>
);

export default Layout;