import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  max-width: 1280px;
  margin: auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 100vh;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 1rem;
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding-top: 15rem;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: 800;
  text-align: center;
  z-index: 10;
`;

export const Subitle = styled.h1`
  position: relative;
  top: 520px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 400;
  z-index: 10;
`;

export const Shape = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Banner = styled(motion.div)`
  position: absolute;
  top: 700px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
