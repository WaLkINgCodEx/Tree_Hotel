const Awards = ({ name, image }) => {
  return (
    <div className="award-list">
      <div className="award-image">
        <img
          className="award-image-size"
          src={require(`../../assets/images/${image}`)}
          alt={name}
        />
      </div>
      <div className="award-name">
        <p>{name}</p>
      </div>
    </div>
  );
};
export default Awards;
