import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import { motion } from 'framer-motion';

export default createGlobalStyle`
  :root {
    --black: #000000;    
    --white: #FFFFFF;    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  
  html, body, #root {  
    max-height: 100vh;
    max-width: 100%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;        
  }
  
  @media(max-width:1080px) {
    html { 
      font-size: 93.75%
    }
  }
  
  @media(max-width:720px) {
    html { 
      font-size: 87.5%
    }
  }
  
  body { 
    background: var(--dark-gray);
    color: var(--black);
  }

  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }

  a { 
    color: var(--black);
    text-decoration: none;
  }  
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const Container = styled(motion.div)`
  /* padding: 15rem 1rem; */
  max-width: 1280px;
  margin: auto;
`;

export const SectionLead = styled.h4`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: #ea3a60;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  padding-top: 1.5rem;
`;

export const GroupContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
