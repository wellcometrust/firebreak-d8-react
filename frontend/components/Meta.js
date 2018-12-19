import Head from 'next/head';

const Meta = () => (
    <div>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
        <title>Trustnet</title>
    </Head>

        <style jsx global>{`
    $bg: #333;
    $white: #fff;

    * { box-sizing: border-box; margin: 0; padding: 0; }

    @font-face {
      font-family: 'Wellcome-Bold';
      src: url('/static/wellcome-bold-webfont.woff2') format('woff2'),
           url('/static/wellcome-bold-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    body {
      background: $white;
      color: $bg;
    }

    .container {
      max-width: 1200px;
      width: 1200px;
      margin: 0 auto;
    }

    .main {
      margin: 30px auto;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(18, 1fr);
      grid-gap: 10px;
      align-items: start;
    }

    article * {
      grid-column: 5/14;
    }

    .article__copy {
    font-size: 16px;
    line-height: 28px;
    }

    .article__copy p,
    .article__copy h2 {
       margin-bottom: 20px;
    }

    .article__copy a {
       color: #000;
    }

    .article__image {
    width: 600px;
    }

  `}</style>
    </div>
);

export default Meta;
