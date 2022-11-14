const Todo = ({animeId, animeTitle, animeImg, releasedDate, animeUrl}) => {
    return (
    <li key={animeId}>
        <h3>{animeTitle}</h3>
        <img alt="Anime logo" src={animeImg}></img>
        <h4>{releasedDate}</h4>
        <a href={animeUrl}>Link to anime</a>
        </li>
    )
}

export default Todo