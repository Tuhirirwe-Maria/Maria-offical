import Head from "next/head";

const Meta = ({ title, keywords, description, siteLink, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Favicons --> */}
      <link href="assets/img/favicon.png" rel="icon"/>
  <link href="assets/img/android-chrome.png" rel="icon"/>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>


      <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteLink} />
    <meta
      property="og:image"
      content={image}
    />
    <meta
      property="og:description" 
      content={description}
    />

    <meta property="twitter:card" content={title}/>
    <meta
      property="twitter:url"
      content={siteLink}
    />
    <meta property="twitter:title" content={title} />
    <meta
      property="twitter:description"
      content={description}
    />
    <meta
      property="twitter:image"
      content={image}
    />






{/* <!-- Favicons --> */}
  <link href="assets/img/favicon.png" rel="icon"/>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

  {/* <!-- Google Fonts --> */}
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

  {/* <!-- Vendor CSS Files --> */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
  
  {/* <!-- W3school CSS Files --> */}
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

  {/* <!-- Vendor CSS Files --> */}
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
  

  {/* <!-- Template Main CSS File --> */}
  <link href="/assets/css/style.css" rel="stylesheet"/>
  <link href="/assets/css/navbar.css" rel="stylesheet"/>


      {/* CUSTOM */}
      <script defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></script>





      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "MARIA",
  keywords: "Portfolio",
  description: "Describing Maria",
  image:"https://res.cloudinary.com/awesomeone-maria/image/upload/v1643104229/maria_rsshdi.png",
  siteLink:"maria-tuhirirwe73.netlify.app/"
};

export default Meta;
