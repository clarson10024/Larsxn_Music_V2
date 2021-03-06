import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"


const SEO = () => {

  const seo = {
    title: `Larsxn - New Music`,
    description: `Music by Larsxn - New Hip Hop, Pop and Alternative Rock. Music composition and collaboration. Vocals and instrumentals. Performance, mixing and recording.`,
    image: "/images/Larsxn_shades_cropped.jpeg",
    url: `https://www.larsxn.com/`,
  }

  return (
    <Helmet title={seo.title} >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {/* {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )} */}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         defaultDescription: description
//         siteUrl: url
//       }
//     }
//   }
// `