import { Link } from 'react-router-dom'

export default function AlbumCard({thisAlbum}) {
    return(
        <Link to ={`/albums/${thisAlbum.albumId}`}>
    <div className="album-card">
    <h3 className="album-title">{thisAlbum.album}</h3>
    <p>{thisAlbum.artist}, {thisAlbum.year}</p>
    </div>
    </Link>
    )
}