import Image from 'next/image';

// assets:
import ServiceThumbImg from '../../../assets/service-thumb.png';
import ShapePattern1Img from '../../../assets/shape-pattern1.png';
import SecureServiceImg from '../../../assets/services/secure.svg';
import SmartServiceImg from '../../../assets/services/smart.svg';

import { SideCard } from '../../SideCard';

import {
  Section,
  Container,
  SectionLead,
  SectionTitle,
} from '../../../styles/GlobalStyles';

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

export const ServiceSection: React.FC = () => {
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
                <Image src={ShapePattern1Img} />
              </BehindImg>

              <Image src={ServiceThumbImg} />
            </LeftSide>
            <RightSide
              variants={rightVariants}
              initial="hidden"
              animate="visible"
            >
              <SectionLead style={{ textAlign: 'end' }}>
                Our Services
              </SectionLead>
              <SectionTitle style={{ textAlign: 'end', fontSize: '48px' }}>
                Business Goals {<br />}Achieved with Design
              </SectionTitle>
              <Content>
                {cardList.map((card, index) => (
                  <SideCard
                    variants={childVariants}
                    key={index}
                    img={card.img}
                    title={card.title}
                    content={card.content}
                  />
                ))}
              </Content>
            </RightSide>
          </FlexContainer>
        </Container>
      </Section>
    </>
  );
};
