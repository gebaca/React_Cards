import "./App.css";

export default function Card() {
  return (
    <div className="perroCard">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"
        alt="Perro"
      />
      <br />
      <p>
        <span className="like-count">${0}</span>❤️{" "}
        <span className="dislike-count">${0}</span>🤮
      </p>
      <button className="like">Preciosísimo</button>{" "}
      <button className="dislike">Feísisimo</button>
    </div>
  );
}
