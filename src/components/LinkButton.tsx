import { ComponentProps, ElementType } from 'react';
import { Link } from 'react-router-dom';

import { w } from '../utils';

export type LinkButtonProps = ComponentProps<typeof Link> & {
  icon?: ElementType<{ className?: string }>;
};

export function LinkButton({ className, icon: Icon, children, ...props }: LinkButtonProps) {
  return (
    <Link
      className={w('flex items-center gap-1.5 text-zinc-400 hover:text-zinc-300 transition-colors text-sm', className)}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}

      {children}
    </Link>
  );
}
