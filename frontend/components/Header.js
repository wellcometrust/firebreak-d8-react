import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
    <header>
        <div>
            <h1>
                <Link href="/">
                    <a>Trustnet</a>
                </Link>
            </h1>
            <Nav />
        </div>

        <style jsx>{`
        header {
        border-bottom: 10px solid #FEC200;
        position: relative;
        }

        div {
         max-width: 1200px;
         margin: 20px auto;
        }

        h1 {
        font-size: 37px;
        line-height 50px;
        font-family: 'Wellcome-Bold';
        display: inline-block;
        margin: 0 60px 0 0;
        }

        a {
        text-decoration: none;
        color: black;
        }

        a:hover {
        text-decoration: underline;
        }

    `}</style>
    </header>

);

export default Header;