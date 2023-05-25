import styled from "styled-components";
import picDesktop from "./images/image-hero-desktop.png";
import databiz from "./images/client-databiz.svg";
import audioPhile from "./images/client-audiophile.svg";
import meet from "./images/client-meet.svg";
import maker from "./images/client-maker.svg";
import picMobil from "./images/image-hero-mobile.png";
const Hero = () => {
  return (
    <Wrapper>
      <div className="info-container">
        <div className="info">
          <h1 className="item">Make remote work</h1>
          <p className="description">
            Get your team in sync,no matter your location.Streaming
            processes,create team rituals,and watch productivity soar.
          </p>
          <button className="btn learn-more">Learn more</button>
        </div>
        <div className="logos">
          <img src={databiz} alt="databiz" />
          <img src={audioPhile} alt="audioPhile" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </div>
      </div>
      <div className="img-container">
        <img src={picDesktop} alt="pic Desktop" className="img desktop" />
        <img src={picMobil} alt="pic Mobil" className="img mobil" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 5rem;
  .info-container {
    height: 100%;
    position: relative;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 60%;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .mobil {
    display: none;
  }
  h1 {
    font-weight: 700;
    text-transform: capitalize;
  }
  .description {
    color: hsl(0, 0%, 41%);
    line-height: 1.25rem;
    letter-spacing: var(--letter-spacing);
  }
  .learn-more {
    width: 40%;
    padding: 0.75rem 1rem;
    height: 100%;
  }
  .logos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    justify-self: self-end;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .img-container {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100%;
    /* display: flex; */
    /* flex-direction: column-reverse;
    justify-content: center; */
    position: none;
    grid-template-columns: none;

    grid-template-rows: 0.5fr 1fr;
    gap: 0;
    .img-container {
      height: 50%;
      grid-row: 1 / 2;
    }
    .desktop {
      display: none;
    }
    .mobil {
      display: block;
    }
    .learn-more {
      height: 2rem;
    }
    .info {
      display: block;
    }
    .logos {
      margin-top: 0;
    }
    .description {
      margin-top: 2rem;
    }
    .learn-more {
      margin-top: 2rem;
    }
  }
`;
export default Hero;
