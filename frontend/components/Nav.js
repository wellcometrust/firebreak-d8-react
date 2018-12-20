import Link from 'next/link';

export default () => (
    <div>
    <input placeholder='Search' />
    <ul>
        <Item href="/">Groups</Item>
        <Item href="/">Org charts</Item>
        <Item href="/">Working at Wellcome</Item>
        <Item href="/">Shortcuts</Item>
    </ul>
        <style jsx>{`
        div, input, ul {
         display: inline-block;
        }

      ul {
        list-style-type: none;
      }

      input {
      height: 28px;
      width: 300px;
      border: 1px solid #FEC200;
      padding: 0 10px;
      margin-right: 60px;
      }
    `}</style>
    </div>
);

const Item = ({ href, children }) => (
    <li>
        <Link prefetch href={ href }>
            <a>{ children }</a>
        </Link>
        <style jsx>{`
     li {
      font-family: "Helvetica Neue";
      font-size: 18px;
      line-height: 24px;
      font-weight: bold;
      margin-left: 20px;
      display: inline-block;
    }

     a {
      text-decoration: none;
      font-size: 18px;
      color: #000;
     }

     a:hover {
     text-decoration: underline;
     }
    `}</style>
    </li>
);
