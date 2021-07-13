import React from 'react'
import HeaderPlay from '../Header/header-play'
import PlayListTable from '../ListadoPlayList/ListPlayList'
import PlayListCreate from '../ListadoPlayList/Playlist'



function PlayListCreator( {  } ) {
    return (
        <div>
            <HeaderPlay />
            <PlayListCreate />
        </div>
    )
}

export default PlayListCreator
