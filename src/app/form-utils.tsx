import { type InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type TextInputProps = {
  isError?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ isError = false, className = '', ...inputProps }, ref) {
    return (
      <input
        type='text'
        {...inputProps}
        ref={ref}
        className={twMerge(
          `rounded-lg border-2 p-3 ${
            isError
              ? 'border-red-600 bg-red-50 outline-2 outline-red-600 focus:outline'
              : 'border-gray-200 bg-gray-100'
          }`,
          className
        )}
      />
    );
  }
);

export const ErrorsBlock = ({
  errors
}: {
  errors: readonly (string | undefined)[];
}) => {
  return !errors.every((e) => !e) ? (
    <div className='rounded-r-lg border-l-8 border-red-600 bg-red-100 p-4'>
      <ul>
        {errors.map((error, i) => (
          <li key={i} className='font-semibold'>
            {error}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export type ButtonProps = Omit<
  InputHTMLAttributes<HTMLButtonElement>,
  'type'
> & {
  type?: 'button' | 'reset' | 'submit';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, ...buttonProps }: ButtonProps, ref) {
    return (
      <button
        {...buttonProps}
        className={twMerge(
          `rounded-lg bg-blue-700 p-3 font-semibold text-white transition-all hover:enabled:scale-105 hover:enabled:bg-blue-600 active:enabled:bg-blue-500 disabled:bg-gray-300 disabled:text-gray-700`,
          className
        )}
        ref={ref}
      ></button>
    );
  }
);
