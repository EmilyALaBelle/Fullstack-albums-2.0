import {useEffect, useState } from 'react'
import Header from "../components/Header"
import AlbumCard from "../components/AlbumCard"
import { Link, useParams } from 'react-router-dom'
export default function SingleAlbum() {
    const { albumId } = useParams()
    const [thisAlbum, setThisAlbum] = useState()
    useEffect(() => {
        fetch('http://albums-api-el.web.app/albums')
        .then(responce => responce.json())
        .then(data => {
            const _thisAlbum = data.find(album => album.albumId === albumId)
            setThisAlbum(_thisAlbum)
        })
        .catch(alert)
    }, [albumId])
    return (
        <>
            <Header title={thisAlbum ? thisAlbum.album : 'Loading...'} />
            <Link to="/"> &lt; Back</Link>
            {thisAlbum
                ? <AlbumCard thisAlbum={thisAlbum} />
                :null
            }
        </>
    )
}