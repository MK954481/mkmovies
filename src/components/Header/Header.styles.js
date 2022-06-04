import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

export const Wrapper1 = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px 5px;
  border-radius: 25%;
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  :hover {
    background: var(--lightGrey);
    color: black;
    transition: ease-in 0.1s;
  }
`;
