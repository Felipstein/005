import { ComponentProps } from 'react';

import { w } from '../utils';

type TextType = 'p' | 'span';

export type TextProps<As extends TextType> = ComponentProps<As> & {
  as?: As;
};

export function Text<As extends TextType>({
  // @ts-expect-error
  as = 'p',
  className,
  ...props
}: TextProps<As>) {
  const Component = as;

  return (
    // @ts-expect-error
    <Component className={w('text-zinc-400 text-sm', className)} {...props} />
  );
}
