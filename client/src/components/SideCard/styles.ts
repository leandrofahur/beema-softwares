import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 540px;
  margin: 0 1rem;
  padding: 1rem;
`;

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
`;

export const CardContent = styled.h6`
  font-size: 15px;
  font-weight: 400;
  text-align: justify;
  padding-top: 1rem;
  line-height: 1.2rem;
`;
