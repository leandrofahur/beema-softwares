import Image from 'next/image';

// assets:

import NumberOneImg from '../../assets/numbers/01.svg';
import NumberTwoImg from '../../assets/numbers/02.svg';
import NumberThreeImg from '../../assets/numbers/03.svg';
import NumberFourImg from '../../assets/numbers/04.svg';
import ArrowEvenImg from '../../assets/arrowEven.svg';
import ArrowOddImg from '../../assets/arrowOdd.svg';

import { Card } from '../../components/Card';

import {
  Section,
  SectionTitle,
  SectionLead,
  GroupContainer,
} from '../../styles/GlobalStyles';

import { BgContainer } from './styles';

const parentVariants = {
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
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const cardList = [
  {
    img: NumberOneImg,
    title: 'Fast Performance',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: NumberTwoImg,
    title: 'Partnership Deal',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: NumberThreeImg,
    title: 'Pro subscription',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: NumberFourImg,
    title: 'Customer Support',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <>
      <Section style={{ padding: '15rem 1rem' }} id="advertise">
        <BgContainer>
          <SectionLead style={{ color: `#fff` }}>
            Whats the function
          </SectionLead>
          <SectionTitle>Meet the feature of product</SectionTitle>
          <GroupContainer>
            {cardList.map((card, index) => (
              <Card
                variants={childVariants}
                key={index}
                img={card.img}
                title={card.title}
                content={card.content}
              />
            ))}
          </GroupContainer>
        </BgContainer>
      </Section>
    </>
  );
};
