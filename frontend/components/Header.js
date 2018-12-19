import Link from 'next/link';

const Header = () => (
    <header>
        <div>
            <h1>
                <Link href="/">
                    <a>Trustnet</a>
                </Link>
            </h1>
        </div>

        <style jsx>{`
        header {
        border-bottom: 1px solid grey;
        }

        div {
         max-width: 1200px;
         margin: 20px auto;
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