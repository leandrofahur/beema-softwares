import React from 'react';
import { Hero } from '../layouts/Hero';
import { FeatureSection } from '../layouts/FeatureSection';
import { ServiceSection } from '../layouts/ServicesSection';
import { QualitySection } from '../layouts/QualitySection';
import { CoreSection } from '../layouts/CoreSection';

import { Container } from './styles';
import { HowItWorksSection } from '../layouts/HowItWorksSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ServiceSection />
      <QualitySection />
      <CoreSection />
      <HowItWorksSection />
    </>
  );
}
