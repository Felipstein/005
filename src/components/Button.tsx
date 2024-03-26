import { Loader2 } from 'lucide-react';
import { ComponentProps, forwardRef } from 'react';

import { w } from '../utils';

export type ButtonProps = ComponentProps<'button'> & {
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', loading = false, disabled = false, className, children, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={w(
        'w-full bg-white text-zinc-900 font-semibold rounded-md px-4 py-2.5 shadow-lg shadow-transparent text-sm hover:shadow-white/20 transition-all active:text-white active:bg-zinc-600 active:shadow-inner',
        (loading || disabled) && 'opacity-40 pointer-events-none flex items-center justify-center gap-2',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}

      {children}
    </button>
  ),
);
