
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import MessageSectionContainer from "./MessageSectionContainer"
import ArtistsSectionContainer from "./ArtistsSectionContainer"
import DemosSectionCarouselContainer from "./DemosSectionCarouselContainer"
import ChannelsSectionContainer from "./ChannelsSectionContainer"
import Footer from "./Footer"
import "./Layout.css"
import titles from "../content_data/titles"
import artists from "../content_data/artists"
import ErrorBoundry from "./ErrorBoundary"


const Layout = (props) => {

  let curTitle = []
  let artistList = []

  const [context, setContext] = props.appContext

  console.log ('in layout')
  console.log ("props.titleName", props.titleName)
  console.log ('layout context state',  context.title)
  console.log ('layout context artistsPage', context.artistsPage)
  console.log ('layout props.titlename', props.titleName)
  console.log ('layout props.artistsPage', props.artistsPage)
  console.log ('artists array', artists)
  try {
    let curTitle = titles.find(titles => titles.titleName === context.title)
    let artistList = artists.filter(artist => artist.titleName === props.titleName)
  }
  catch (err) {
    console.log (err)
  }

  console.log ('curTitle', curTitle)
  console.log('artistList', artistList)
  alert ("Layout")


  return (
    <div>
    <ErrorBoundry>
      <Header
        titleName={curTitle.titleName}
        cover={curTitle.cover}
        coverArt={curTitle.coverArt}
        alt={curTitle.alt}
        appContext = {props.appContext}
        />

      <div>
      {/* {props.artistsPage && */}
          <ArtistsSectionContainer artistList={artistList} />
      </div>

      {/* } */}
      {/* {!props.artistsPage &&

        <>
          <MessageSectionContainer />
          <DemosSectionCarouselContainer title={curTitle.titleName} />
        </>
      } */}

      <ChannelsSectionContainer />
      <Footer />
      </ErrorBoundry>
    </div>
  )
}


export default Layout