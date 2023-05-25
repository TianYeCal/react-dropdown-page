import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import openIcon from "./images/icon-menu.svg";
import todoList from "./images/icon-todo.svg";
import calender from "./images/icon-calendar.svg";
import reminder from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";
import { useGlobalContext } from "./context";

const Nav = () => {
  const {
    showFeature,
    setShowFeature,
    showCompany,
    setShowCompany,
    showModal,
    setShowModal,
  } = useGlobalContext();
  return (
    <Wrapper>
      <h1>snap</h1>
      <button
        onClick={() => setShowModal(!showModal)}
        className="open-icon active btn "
      >
        <img src={openIcon} alt="open icon" />
      </button>
      <div className="links">
        <div className="categories">
          <div className="features">
            <button
              className="click "
              onClick={() => setShowFeature(!showFeature)}
            >
              <p className="align-text">
                Features
                {showFeature ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </button>
            {showFeature && (
              <div className="dropdown-feature">
                <a href="#" className="dropdown-list">
                  <img src={todoList} alt="todoList" /> <span>Todo List</span>
                </a>
                <a href="#" className="dropdown-list">
                  <img src={calender} alt="calender" />
                  <span> Calendar</span>
                </a>
                <a href="#" className="dropdown-list">
                  <img src={reminder} alt="reminder" />
                  <span>Reminders</span>
                </a>
                <a href="#" className="dropdown-list">
                  <img src={planning} alt="planning" />
                  <span>Planning </span>
                </a>
              </div>
            )}
          </div>
          <div className="company">
            <button
              className="click "
              onClick={() => setShowCompany(!showCompany)}
            >
              <p className="align-text">
                Company
                {showCompany ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </button>
            {showCompany && (
              <div className="dropdown-company">
                <a href="#" className="dropdown-list">
                  <p>History</p>
                </a>
                <a href="#" className="dropdown-list">
                  <p>Our Team</p>
                </a>
                <a href="#" className="dropdown-list">
                  <p>Blog</p>
                </a>
              </div>
            )}
          </div>

          <button className="click">Careers</button>
          <button className="click">About</button>
        </div>
        <div className="login">
          <button className="click">Login</button>
          <button className="click border">Register</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .categories {
    display: flex;
    gap: 1rem;
  }
  .open-icon {
    display: none;
  }
  .login {
    display: flex;
    gap: 1rem;
  }
  .click {
    border: none;
    background: transparent;
    font-size: 18px;
    color: hsl(0, 0%, 41%);
    cursor: pointer;
  }
  .border {
    border: 1px hsl(0, 0%, 41%) solid;
    padding: 0.5rem 0.75rem;
    border-radius: var(--border-radius);
  }
  h1 {
    text-transform: none;
    font-weight: 700;
  }
  .features {
    position: relative;
  }
  .dropdown-feature {
    position: absolute;
    top: 120%;
    left: -80%;
    padding: 1rem;
    background: var(--white);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    width: 180%;
  }
  .company {
    position: relative;
  }
  .dropdown-company {
    position: absolute;
    top: 120%;
    right: -80%;
    padding: 1rem;
    background: var(--white);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    width: 180%;
  }
  .dropdown-list {
    color: hsl(0, 0%, 41%);
  }
  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .align-text {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    .links {
      display: none;
    }
    .active {
      display: block;
    }
  }
`;
export default Nav;
