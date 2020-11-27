import { BodyTableRequire } from '../TableRequirefield';

export const CardSquareInfoLink = '/card/card-square-info';
export const CardSquareInfoSource = '/src/card/CardSquareInfo.tsx';
export const CardSquareInfoPreview = `
<CardSquareInfo
  icon="fab fa-apple"
  cardSize={260}
  cardColor="#2e3033"
  iconColor="#f3f3f3"
  cardInfoColor="#5eb0e5"
  iconInfoColor="#f3f3f3"
  textColor="#f3f3f3"
  info="Lorem ipsum dolor sit amet"
/>
`;
export const CardSquareInfoRequire: BodyTableRequire[] = [
  {
    name: 'icon',
    type: 'string',
    require: true,
    remark: { type: 'url', value: 'https://fontawesome.com' },
  },
  {
    name: 'cardSize',
    type: 'number',
    require: false,
    remark: { type: 'string', value: 'default: 160' },
  },
  {
    name: 'cardColor',
    type: 'string',
    require: false,
    remark: { type: 'color', value: '#d0d0d0' },
  },
  {
    name: 'iconColor',
    type: 'string',
    require: false,
    remark: { type: 'color', value: '#ffffff' },
  },
  {
    name: 'cardInfoColor',
    type: 'string',
    require: false,
    remark: { type: 'color', value: '#ffffff' },
  },
  {
    name: 'iconInfoColor',
    type: 'string',
    require: false,
    remark: { type: 'color', value: '#808080' },
  },
  {
    name: 'textColor',
    type: 'string',
    require: false,
    remark: { type: 'color', value: '#000000' },
  },
  {
    name: 'info',
    type: 'string',
    require: true,
    remark: { type: 'string', value: 'maximum nunmber of lines is 4' },
  },
];
