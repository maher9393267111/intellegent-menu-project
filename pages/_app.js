import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (

    <div>
 <div id="app-header"></div>
    
  <Component {...pageProps} />
  
  </div>
  
  )
}
