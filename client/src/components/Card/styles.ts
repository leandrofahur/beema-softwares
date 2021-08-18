import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  width: 240px;
  margin: 0 1rem;
  padding: 2rem;
`;

export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
`;

export const CardContent = styled.h6`
  font-size: 15px;
  font-weight: 400;
  text-align: justify;
  padding-top: 2rem;
  line-height: 1.8rem;
`;
