const TeamCard = ({ name, title, image, socials, highlight }) => {
  return (
    <div className={`team-card`}>
      <div className="curve-top" />
      <div className="profile-img">
        <img src={`https://${image}`} alt={name} />
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <div className="card-bottom">
        <a href={socials[0]} target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={socials[1]}>
          <i className="fas fa-envelope"></i>
        </a>
        <a href={socials[2]} target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
