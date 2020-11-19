import { BodyTableRequire } from '../TableRequirefield';

export const ButtonHoverBorderLink = '/button/button-hover-border';
export const ButtonHoverBorderSource = '/src/button/ButtonHoverBorder.tsx';
export const ButtonHoverBorderPreview = `
<ButtonHover
  backgroundColor="#ffe3b3"
  lineColor="#dd4470"
  textColor="#fe72a9"
  fourLine
>
  Hover Four Line
</ButtonHover>
`;
export const ButtonHoverBorderRequire: BodyTableRequire[] = [
  {
    name: 'backgroundColor',
    type: 'string',
    require: false,
    remark: '#d0d0d0',
  },
  {
    name: 'textColor',
    type: 'string',
    require: false,
    remark: '#000000',
  },
  {
    name: 'lineColor',
    type: 'string',
    require: false,
    remark: '#000000',
  },
  {
    name: 'oneLine',
    type: 'boolean',
    require: false,
    remark: 'default',
  },
  {
    name: 'twoLine',
    type: 'boolean',
    require: false,
  },
  {
    name: 'fourLine',
    type: 'boolean',
    require: false,
  },
];
