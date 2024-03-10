export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=990&crop=1"
          alt="img"
        />
      </div>
      <div className="texts">
        <h2>Full House Battery Backup comming later this year.</h2>
        <p className="info">
          <a className="author">Ankit Srivastava</a>
          <time>2024-02-02-10 16:45</time>
        </p>
        <p className="summary">
          The company also launched a battery-powered fridge and a portable
          battery-powered air-conditioning unit.There’s also a lawn mower, which
          makes me think that preppers will have delightfully pristine lawns.
        </p>
      </div>
    </div>
  );
}
