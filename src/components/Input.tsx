import { ComponentProps, forwardRef } from 'react';

import { w } from '../utils';

type ClassNames = {
  root?: string;
  label?: string;
  input?: string;
};

export type InputProps = Omit<ComponentProps<'input'>, 'className'> & {
  label?: string;
  className?: string | ClassNames;
  errorFeedback?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, errorFeedback, ...props }, ref) => {
    function getClassName(element: keyof ClassNames) {
      if (typeof className !== 'object') {
        return element === 'input' ? className : undefined;
      }

      return className[element];
    }

    return (
      <div
        className={w(
          'flex flex-col gap-1',
          props.disabled && 'opacity-40 pointer-events-none',
          getClassName('root'),
        )}
      >
        {label && (
          <label
            htmlFor={props.id}
            className={w(
              'font-medium text-sm',
              errorFeedback && 'text-red-500',
              getClassName('label'),
            )}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={w(
            'w-full bg-transparent border rounded-md border-zinc-800 focus:outline-none hover:border-zinc-600 focus:border-zinc-500 transition-colors px-2.5 py-2',
            getClassName('input'),
          )}
          {...props}
        />

        {errorFeedback && (
          <span className="mt-0.5 text-red-500 text-xs">{errorFeedback}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
