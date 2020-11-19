import { BodyTableRequire } from '../TableRequirefield';

export const SwitchMobileLink = '/toggle/mobile';
export const SwitchMobileSource = '/src/toggle/SwitchMobile.tsx';
export const SwitchMobilePreview = `
  <SwitchMobile
    size={60}
    uncheckedColor="grey"
    checkedColor="white"
    callbackFunc={(checked) => alert(checked)}
  />
`;
export const SwitchMobileRequire: BodyTableRequire[] = [
  {
    name: 'size',
    type: 'number',
    require: false,
    remark: { type: 'string', value: '40' },
  },
  {
    name: 'uncheckedColor',
    type: 'string',
    require: false,
    remark: { type: 'color', value: '#FF0000' },
  },
  {
    name: 'checkedColor',
    type: 'string',
    require: false,
    remark: { type: 'color', value: '#00FF00' },
  },
  {
    name: 'callbackFunc',
    type: 'function',
    require: false,
    remark: { type: 'string', value: '() => { }' },
  },
];
