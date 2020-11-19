import { BodyTableRequire } from '../TableRequirefield';

export const CardProductLink = '/card/card-product';
export const CardProductSource = '/src/card/CardProduct.tsx';
export const CardProductPreview = `
<CardProduct
  title="headphone"
  price={3500}
  satang={50}
  color="#e01d1d"
  link="https://www.google.com/"
/>
`;
export const CardProductRequire: BodyTableRequire[] = [
  {
    name: 'title',
    type: 'string',
    require: true,
  },
  {
    name: 'price',
    type: 'number',
    require: true,
  },
  {
    name: 'satang',
    type: 'number',
    require: false,
    remark: '0 (Zero)',
  },
  {
    name: 'color',
    type: 'string',
    require: false,
    remark: '#8A8A8A',
  },
  {
    name: 'link',
    type: 'string',
    require: false,
    remark: '/',
  },
];
