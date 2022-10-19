import Script from 'next/script'

function Home() {
  return (
    <div className="container">
      # Global site tag (gtag.js) - Google Analytics -->
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DEFER9ZCKT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DEFER9ZCKT');
        `}
      </Script>
    </div>
  )
}

export default Home
