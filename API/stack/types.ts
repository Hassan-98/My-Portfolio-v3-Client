export interface Stack {
  _id: string;
  name: string;
  image: string;
  type: StackType;
  isNotCompitable?: boolean;
}

export type ExtendedStack = Stack & { order?: number; selected?: boolean };

export enum StackType {
  front = 'front',
  back = 'back',
  tools = 'tools',
  full = 'front back'
}