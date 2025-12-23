import picture from './assets/photo.webp'
function Card() {
    return(
        <div className="card">
            <img className="card-image" src={picture} alt="t"/>
            <h2 className='card-title'>hoax</h2>
            <p className='card-text'>learning react and play chess</p>
        </div>
    );
}

export default Card