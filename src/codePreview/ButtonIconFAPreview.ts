import { BodyTableRequire } from '../TableRequirefield';

export const ButtonIconFALink = '/button/button-fontawesome';
export const ButtonIconFASource = '/src/button/ButtonIconFA.tsx';
export const ButtonIconFAPreview = `
<ButtonIconFA
  icon="fa-facebook-f"
  bgColor="#1877f2"
  link="https://www.facebook.com"
/>
`;
export const ButtonIconFARequire: BodyTableRequire[] = [
  {
    name: 'icon',
    type: 'string',
    require: true,
    remark: 'https://fontawesome.com',
  },
  {
    name: 'bgColor',
    type: 'string',
    require: false,
    remark: '#FFFFFF',
  },
  {
    name: 'link',
    type: 'string',
    require: false,
    remark: '/#',
  },
];
