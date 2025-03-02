import styled from "styled-components";

const Wrapper = styled.nav`
  height: 5rem;
  padding: 1rem;
  display: grid;
  align-items: center;
  transition: all 0.3s linear;

  .nav-links {
    display: none;
  }
  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .nav-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--primary-500);
    cursor: pointer;
    justify-self: end;
    /* display: flex; */
    /* align-items: center; */
  }
  .nav-logo {
    display: flex;
    align-items: center;
    width: 100px;
  }

  @media (min-width: 786px) {
    .nav {
      background: var(--primary-500);
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      gap: 7rem; /* Adjust space between links */
      margin-left: auto; /* Pushes nav links to the right */
      align-items: center;
      list-style: none;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var();
      font-weight: bold;
      letter-spacing: 0.25rem;
      transition: var(all 0.3s linear);
    }
    .nav-links a:hover {
      color: black;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
    /* fixed navbar */
    .navbar-fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: solid;
      z-index: 2;
      box-shadow: black;
      height: 3rem;
    }
  }
`;
export default Wrapper;
