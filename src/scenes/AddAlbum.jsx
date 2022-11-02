import Header from '../components/Header'
import NewAlbumForm from '../components/NewAlbumForm'
export default function AddAlbum() {
    return (
        <>
            <Header title={'Add New Album'} />
            <NewAlbumForm />
            <p>New Album Form goes here</p>
        </>
    )
}