import "../styles/home.css";
import Login from "./Login";
const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <div className=" home-main-secondary-container"></div>
        <div>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Home;
