import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BehindImg = styled(motion.div)`
  position: absolute;
  top: 170px;
  left: -150px;
  z-index: -10;
`;

export const RightSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div``;
