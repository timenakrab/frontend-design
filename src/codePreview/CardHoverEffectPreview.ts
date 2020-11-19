import { BodyTableRequire } from '../TableRequirefield';

export const CardHoverEffectLink = '/card/card-hover-effect';
export const CardHoverEffectSource = '/src/card/CardEffect.tsx';
export const CardHoverEffectPreview = `
<CardEffect
  no="01"
  title="Post Title"
  desc="Description..."
  link="/"
/>
`;
export const CardHoverEffectRequire: BodyTableRequire[] = [
  {
    name: 'no',
    type: 'string | number',
    require: true,
  },
  {
    name: 'title',
    type: 'string',
    require: true,
  },
  {
    name: 'desc',
    type: 'string',
    require: true,
  },
  {
    name: 'link',
    type: 'string',
    require: false,
    remark: '/',
  },
];
