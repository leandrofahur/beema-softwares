import Image from 'next/image';

// assets:
import PerformanceImg from '../../assets/feature/performance.svg';
import PartnershipImg from '../../assets/feature/partnership.svg';
import SubscriptionImg from '../../assets/feature/subscription.svg';
import SupportImg from '../../assets/feature/support.svg';

import { SideCard } from '../../components/SideCard';

import {
  Section,
  Container,
  SectionTitle,
  SectionLead,
} from '../../styles/GlobalStyles';

import { GridContainer } from './styles';

const parentVariants = {
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

const childVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
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
    img: SubscriptionImg,
    title: 'Pro subscription',
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
    img: SupportImg,
    title: 'Customer Support',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

export const QualitySection: React.FC = () => {
  return (
    <>
      <Section style={{ padding: '15rem 1rem' }} id="advertise">
        <Container variants={parentVariants} initial="hidden" animate="visible">
          <SectionLead>Quality Features</SectionLead>
          <SectionTitle>Amazing useful features</SectionTitle>
          <GridContainer>
            {cardList.map((card, index) => (
              <SideCard
                variants={childVariants}
                key={index}
                img={card.img}
                title={card.title}
                content={card.content}
              />
            ))}
          </GridContainer>
        </Container>
      </Section>
    </>
  );
};
