import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QCV6ME1CPD"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.| [];
                      function gtag(){dat(arguments);}
                      gtag('js', new Date());
  
                      gtag('config', 'G-QCV6ME1CPD');
    `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;