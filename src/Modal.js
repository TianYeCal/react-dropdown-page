import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import todoList from "./images/icon-todo.svg";
import calender from "./images/icon-calendar.svg";
import reminder from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";
import { useGlobalContext } from "./context";
import closeIcon from "./images/icon-close-menu.svg";
const Modal = () => {
  const {
    showFeature,
    setShowFeature,
    showCompany,
    setShowCompany,
    showModal,
    setShowModal,
  } = useGlobalContext();
  if (showModal) {
    return (
      <Wrapper>
        <div className="modal-overlay">
          <div className="links ">
            <button className="close-button">
              <img
                onClick={() => setShowModal(false)}
                src={closeIcon}
                alt="close icon"
              />
            </button>
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
                      <img src={todoList} alt="todoList" />{" "}
                      <span>Todo List</span>
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
              <div>
                <button className="click">About</button>
              </div>
            </div>
            <div className="login">
              <button className="click">Login</button>
              <button className="click border">Register</button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.article`
  width: 100vw;
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* display: grid;
    place-items: center; */
    transition: var(--transition);
    z-index: 1;
  }
  .links {
    z-index: 10;
    max-width: 70vw;
    height: 100vh;
    width: 80%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    margin: 0 auto;
    /* align-items: center; */
    gap: 5rem;
    position: absolute;
    top: 0;
    right: 0;
    /* transform: translateX(100%); */
    transition: all 1s ease-in-out;
    background: var(--grey-50);
  }
  .close-button {
    border: none;
    align-self: flex-end;
    cursor: pointer;
    background: transparent;
  }
  .categories {
    margin-left: 2rem;
  }
  .open-icon {
    display: none;
  }
  .login {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }
  .click {
    border: none;
    background: transparent;
    font-size: 18px;
    color: hsl(0, 0%, 41%);
    cursor: pointer;
    margin-bottom: 2rem;
  }
  .border {
    border: 1px hsl(0, 0%, 41%) solid;
    padding: 0.5rem 0.75rem;
    border-radius: var(--border-radius);
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-transform: none;
    font-weight: 700;
  }

  .dropdown-feature {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    width: 180%;
  }

  .dropdown-company {
    padding: 1rem;

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
`;
export default Modal;
