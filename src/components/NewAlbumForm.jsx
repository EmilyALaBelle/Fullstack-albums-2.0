import { useState } from "react";
import { useNavigate } from "react-router-dom";

const blankAlbum = {
    album: '',
    artist: '',
    year: 1970,
}

export default function NewAlbumForm() {
    const [formData, setFormData] = useState(blankAlbum)
   const navigate = useNavigate()

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        fetch('https://albums-api-el.web.app/albums', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(() => navigate('/'))
    .catch(alert)
}
    return (
        <main className="new-album">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="album">Album:
                    <input type="text" name="album" 
                    onChange={handleFormChange} 
                    value = {formData.album}/>
                </label><br />
                <label htmlFor="artist">Artist:
                    <input type="text" name="artist" 
                    onChange={handleFormChange} 
                    value = {formData.artist}/>
                </label><br />
                <label htmlFor="year">Year:
                    <input type="number" name="year" 
                    onChange={handleFormChange} 
                    value = {formData.year}/>
                </label><br />
                <button type="reset" onClick={() => setFormData(blankAlbum)}>Reset</button>
                <button type="submit">Add Album</button>
            </form>
        </main>
    )
}