import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;

  .text {
    font-size: 3rem;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <Typewriter
        options={{
          strings: ["Shirator's Album"],
          autoStart: true,
          loop: true,
          wrapperClassName: "text",
          pauseFor: "3000",
        }}
      />
      <button onClick={() => alert("under construction")}>Join my world</button>
    </HomeContainer>
  );
};

export default Home;
