import "./App.css";
import Creator from "./Creator";
import DictionaryPage from "./DictonaryPage";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div className="container">
        <div className="outerNav">
          <div className="logo">
            <img
              src="https://www.intract.io/logo/intract_text.svg"
              alt="logo"
            />
          </div>
          <div className="nav">
            <div className="link">Compass</div>
            <div className="link">Explore</div>
            <div className="link">
              Academy <span className="new">New</span>
            </div>
            <div className="link">NFTs</div>
            <div className="link">For Projects</div>
          </div>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc,."
            />
          </div>
          <div className="vdoLogo">
            <img
              src="https://www.intract.io/assets/broadcast_or-04af786c.svg"
              alt="vc"
            ></img>
          </div>
          <span>
            <button className="signInbtn">Sign In</button>
          </span>
        </div>
      </div>
      <img
        className="mainPage"
        src="https://www.intract.io/assets/intract-academy-background-5547a705.png"
        alt=""
      />
      <div className="mainLogo">
        <div className="logoA">
          <img
            src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
            alt="alchemist"
          />
        </div>
        <div className="textContent">
          <p>
            <span>Intract users</span> have together made more than{" "}
            <span> $100 million</span> in web3.
            <br />
            Join them and <span>learn how to earn crypto!</span>
          </p>
        </div>
        <button className="btnGetStarted">Get Started -</button>
      </div>
      <Creator />
      <DictionaryPage />
      <Footer />
    </>
  );
}
export default App;
