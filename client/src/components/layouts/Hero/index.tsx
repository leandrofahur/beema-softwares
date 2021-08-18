import Image from 'next/image';
import Link from 'next/link';

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
  Subitle,
  Content,
  Banner,
} from './styles';
import React from 'react';

import { Button } from '../../Button';

export const Hero: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <Image src={LogoImg} />
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
        <Content>
          <Image src={ShapeLeft} />
          <Title>Top Quality Digital {<br />}Products To Explore</Title>
          <Banner
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={BannerThumbImg} />
          </Banner>
          <Image src={ShapeRight} />
        </Content>
      </Header>
    </>
  );
};
