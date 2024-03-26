import { ComponentProps } from 'react';

import { w } from '../utils';

type TextType = 'p' | 'span';

export type TextProps<As extends TextType> = ComponentProps<As> & {
  as?: As;
};

// @ts-expect-error
export function Text<As extends TextType>({ as = 'p', className, ...props }: TextProps<As>) {
  const Component = as;

  // @ts-expect-error
  return <Component className={w('text-zinc-400 text-sm', className)} {...props} />;
}
