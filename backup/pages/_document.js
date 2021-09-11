import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {

  render() {
    return (
      <Html  lang="ar" >
        <Head>
        <meta name='dailymotion-domain-verification' content='dmw0kdengdd057vnq' />
            <script
             async
              src="https://www.googletagmanager.com/gtag/js?id=G-RGLWNG0N0Q"
            />

  <script
  async
    dangerouslySetInnerHTML={{
      __html: `
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-RGLWNG0N0Q');
        `,
    }}
  />



          <meta name="theme-color" content={theme.palette.primary.main} />




        </Head>
        <body>
        

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {

  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
