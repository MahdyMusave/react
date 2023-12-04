const Header = ( props) => {
  return (
    <>
      <div className="header-container">
        <div className="row">
          <div className="col-25 txt-logo">
            <h2 className="text">{props.logo}</h2>
          </div>
          <div className="col-70 link">
            <a href="/Home">Home</a>
            <a href="/about">about</a>
            <a href="/news">news</a>
            <a href="/content">content</a>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default Header;
