import { ComponentProps } from 'react';

import { w } from '../utils';

export type HeadingProps = ComponentProps<'h1'>;

export function Heading({ className, ...props }: HeadingProps) {
  return <h1 className={w('text-lg font-medium', className)} {...props} />;
}
