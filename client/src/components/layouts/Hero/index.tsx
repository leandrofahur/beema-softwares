import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

// assets:
import LogoImg from '../../../assets/logo.svg';
import ShapeLeft from '../../../assets/shape-left.png';
import ShapeRight from '../../../assets/shape-right.png';
import BannerThumbImg from '../../../assets/banner-thumb.png';

// icons:
import { BiChevronDown } from 'react-icons/bi';

import {
  Container,
  Header,
  Navigation,
  Title,
  SubTitle,
  Content,
  Banner,
} from './styles';
import React from 'react';

import { Button } from '../../Button';

export const Hero: React.FC = () => {
  return (
    <>
      <Header>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Container>
            <Link href="#">
              <Image src={LogoImg} className=".btn" />
            </Link>
            <Navigation>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  {/* @TODO: Implement the dropdown */}
                  <Link href="#advertise">Advertise</Link>
                  <BiChevronDown />
                </li>
                <li>
                  {/* @TODO: Implement the dropdown */}
                  <Link href="#support">Supports</Link>
                  <BiChevronDown />
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </Navigation>
            <Button background="#FFF" color="#EA3A60">
              Get Started
            </Button>
          </Container>
        </motion.div>
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Image src={ShapeLeft} />
          <Title>Top Quality Digital {<br />}Products To Explore</Title>
          <SubTitle>Enjoy the website!</SubTitle>
          <Banner>
            <Image src={BannerThumbImg} />
          </Banner>
          <Image src={ShapeRight} />
        </Content>
      </Header>
    </>
  );
};
