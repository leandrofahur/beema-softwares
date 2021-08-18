import Image from 'next/image';
import { BiBorderRadius } from 'react-icons/bi';

import { CardContainer, CardTitle, CardContent } from './styles';

interface ICard {
  img: string;
  title: string;
  content: string;
  variants?: {};
}

export const Card: React.FC<ICard> = ({ img, title, content, variants }) => {
  return (
    <>
      <CardContainer
        variants={variants}
        whileHover={{
          boxShadow: '5px 10px 18px rgb(211,211,211)',
          borderRadius: '8px',
        }}
      >
        <Image src={img} width={80} height={80} />
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardContainer>
    </>
  );
};
