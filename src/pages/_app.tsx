import '../../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
               <Component {...pageProps} />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500&display=swap" rel="stylesheet"/>
         </>
}

export default MyApp
