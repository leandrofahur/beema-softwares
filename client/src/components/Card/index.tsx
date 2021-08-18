import Image from 'next/image';

import { CardContainer, CardTitle, CardContent } from './styles';

interface ICard {
  img: string;
  title: string;
  content: string;
  variants?: {};
}

export const Card: React.FC<ICard> = ({ img, title, content, variants }) => {
  console.log(variants);
  return (
    <>
      <CardContainer variants={variants}>
        <Image src={img} width={80} height={80} />
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardContainer>
    </>
  );
};
