import Image from 'next/image';

// assets:
import CoreFeatureImg from '../../assets/core-feature.png';
import ShapePattern2Img from '../../assets/shape-pattern2.png';
import SecureServiceImg from '../../assets/services/secure.svg';
import SmartServiceImg from '../../assets/services/smart.svg';

import { Button } from '../../components/Button';

import {
  Section,
  Container,
  SectionLead,
  SectionTitle,
} from '../../styles/GlobalStyles';

import {
  FlexContainer,
  LeftSide,
  RightSide,
  Content,
  BehindImg,
} from './styles';
import React from 'react';

const leftVariants = {
  hidden: { x: '-100vw' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 40,
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

const rightVariants = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 40,
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const cardList = [
  {
    img: SecureServiceImg,
    title: 'Smart Features',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: SmartServiceImg,
    title: 'Secure Contents',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

export const CoreSection: React.FC = () => {
  return (
    <>
      <Section id="support">
        <Container>
          <FlexContainer>
            <LeftSide
              variants={leftVariants}
              initial="hidden"
              animate="visible"
            >
              <BehindImg>
                <Image src={ShapePattern2Img} />
              </BehindImg>

              <Image src={CoreFeatureImg} />
            </LeftSide>
            <RightSide
              variants={rightVariants}
              initial="hidden"
              animate="visible"
            >
              <SectionLead style={{ textAlign: 'start' }}>
                Our Services
              </SectionLead>
              <SectionTitle style={{ textAlign: 'start', fontSize: '48px' }}>
                Smart Jackpots <br /> that you may love this anytime &amp;
                anywhere
              </SectionTitle>
              <Content>
                <p>
                  Get your tests delivered at let home collect sample from the
                  victory of the managments that supplies best design system
                  guidelines ever.
                </p>
                <Button background="#FFF" color="#EA3A60">
                  Get Started
                </Button>
              </Content>
            </RightSide>
          </FlexContainer>
        </Container>
      </Section>
    </>
  );
};
