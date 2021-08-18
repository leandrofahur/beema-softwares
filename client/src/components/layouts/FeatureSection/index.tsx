import Image from 'next/image';

// assets:
import PerformanceImg from '../../../assets/feature/performance.svg';
import PartnershipImg from '../../../assets/feature/partnership.svg';
import SubscriptionImg from '../../../assets/feature/subscription.svg';
import SupportImg from '../../../assets/feature/support.svg';

// icons:
import { BsLightning } from 'react-icons/bs';

import { Card } from '../../Card';

import {
  Section,
  Container,
  SectionTitle,
  SectionLead,
  GroupContainer,
} from '../../../styles/GlobalStyles';

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
    img: PerformanceImg,
    title: 'Fast Performance',
    content:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    img: PartnershipImg,
    title: 'Partnership Deal',
    content:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    img: SubscriptionImg,
    title: 'Pro subscription',
    content:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    img: SupportImg,
    title: 'Customer Support',
    content:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <>
      <Section>
        <Container variants={parentVariants} initial="hidden" animate="visible">
          <SectionLead>Whats the function</SectionLead>
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
        </Container>
      </Section>
    </>
  );
};
