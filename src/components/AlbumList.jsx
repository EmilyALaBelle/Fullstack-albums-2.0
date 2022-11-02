import { useEffect, useState } from 'react'
import AlbumCard from '../components/AlbumCard'

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect (() => {
            fetch('http://albums-api-el.web.app/albums')
            .then(response => response.json())
            .then(setAlbums)
            .catch(alert)
        }, [])
        return (
            <main className='album-list'>
                {!albums
                    ?<h2>Loading...</h2>
                    : albums.map(thisAlbum => (
                        <AlbumCard
                        key={thisAlbum.albumId}
                        thisAlbum={thisAlbum} />
                    ))
                }
            </main>
        )
    }
