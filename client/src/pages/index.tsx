import React from 'react';
import { Hero } from '../components/layouts/Hero';
import { FeatureSection } from '../components/layouts/FeatureSection';

import { Container } from './styles';
import { ServiceSection } from '../components/layouts/ServicesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ServiceSection />
    </>
  );
}
