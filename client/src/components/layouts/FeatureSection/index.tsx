import Image from 'next/image';

// assets:
import PerformanceImg from '../../../assets/feature/performance.svg';
import PartnershipImg from '../../../assets/feature/partnership.svg';
import SubscriptionImg from '../../../assets/feature/subscription.svg';
import SupportImg from '../../../assets/feature/support.svg';

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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: PartnershipImg,
    title: 'Partnership Deal',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: SubscriptionImg,
    title: 'Pro subscription',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: SupportImg,
    title: 'Customer Support',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <>
      <Section style={{ padding: '15rem 1rem' }} id="advertise">
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
