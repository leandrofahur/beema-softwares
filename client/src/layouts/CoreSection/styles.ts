import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const LeftSide = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BehindImg = styled(motion.div)`
  position: absolute;
  top: 180px;
  right: -150px;
  z-index: -10;
`;

export const RightSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: space-between;
  height: 100%;

  p {
    font-size: 22px;
    line-height: 2.5rem;
    padding-top: 4rem;
    width: 80%;
    padding-bottom: 3rem;
  }
`;
