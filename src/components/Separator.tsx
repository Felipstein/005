import { ComponentProps } from 'react';

import { w } from '../utils';

export type SeparatorProps = Omit<ComponentProps<'div'>, 'children'> & {
  label: string;
};

export function Separator({ label, className, ...props }: SeparatorProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={w('bg-zinc-800 w-full h-px rounded-full', className)}
        {...props}
      />
      <span className="text-zinc-400">{label}</span>
      <div
        className={w('bg-zinc-800 w-full h-px rounded-full', className)}
        {...props}
      />
    </div>
  );
}
