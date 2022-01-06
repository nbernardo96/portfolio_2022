import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument