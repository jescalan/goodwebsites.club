import Document, { Html, Head, Main, NextScript } from 'next/document'

class GoodDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            // https://css-tricks.com/emojis-as-favicons/
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💖</text></svg>"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default GoodDocument
