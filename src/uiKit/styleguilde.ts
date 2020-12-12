export interface ColorProps {
  primary: string;
  secondary: string;
  disable: string;
}
export type ColorTypes = 'error' | 'warning' | 'success' | 'info' | 'default';

export const unit = 8;
export const colorStyles = {
  default: {
    primary: '#fbfcfe',
    secondary: '#fafbfe',
    disable: '#dae0eb',
  },
  error: {
    primary: '#f23a3f',
    secondary: '#fc5054',
    disable: '#fe5c61',
  },
  warning: {
    primary: '#ea8c24',
    secondary: '#f5972f',
    disable: '#f8a548',
  },
  success: {
    primary: '#28c78b',
    secondary: '#2dd696',
    disable: '#3ce1a3',
  },
  info: {
    primary: '#2556cd',
    secondary: '#2a5fe4',
    disable: '#396ef1',
  },
};
export const buttonStyles = colorStyles;
export const progressStyles = colorStyles;
export const toggleStyles = colorStyles;
export const bgStyles = {
  dark: '#f8f9fc',
  light: '#f4f5f8',
  transparent: 'transparent',
  white: '#ffffff',
};
export const textStyles = {
  superdark: '#19243b',
  dark: '#393f4d',
  normal: '#596278',
  light: '#8a92a5',
  superlight: '#dbe0eb',
  white: '#fffefd',
};
