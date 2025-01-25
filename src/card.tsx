import profileImg from './assets/sudesh.jpg';
function Card(){
    return (
        <div className="card">
            <img className="cardImg" src={profileImg} alt="ProfilePic" />
            <h2 className='cardTitle'>Sudesh Beloshe</h2>
            <p className='cardText'>Im a student learning at IIT Ropar</p>
        </div>
    );
}

export default Card;