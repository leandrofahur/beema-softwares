import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 20px;
  outline: none;
  border: 1px solid #ea3a60;
  background-color: #fff;
  padding: 0.7rem 1.5rem;

  svg {
    height: 20px;
    width: 20px;
    margin-right: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
