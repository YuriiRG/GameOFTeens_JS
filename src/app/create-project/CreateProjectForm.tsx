'use client';
import { type InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
const schema = z.object({
  name: z
    .string()
    .min(1, "Ім'я проєкту є обов'язковим")
    .max(20, "Ім'я проєкту не може бути довше 20 символів"),
  bigImage: z
    .string()
    .min(1, "Велике зображення є обов'язковим")
    .url('Посилання на велике зображення має бути коректним'),
  smallImage: z
    .string()
    .min(1, "Мале зображення є обов'язковим")
    .url('Посилання на мале зображення має бути коректним'),
  description: z
    .string()
    .min(1, "Опис проєкту є обов'язковим")
    .max(350, 'Опис проєкту має бути не довше 350 символів'),
  longDescription: z.string().min(1, "Довгий опис проєкту є обов'язковим")
});

export default function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  });
  const isValidationError = !Object.values(errors).every(
    (error) => error === undefined
  );
  return (
    <form
      className='flex w-[65ch] flex-col gap-6'
      onSubmit={(e) => void handleSubmit((data) => console.log(data))(e)}
    >
      <div>
        <label htmlFor='name' className=''>
          Ім&apos;я проєкту:
        </label>
        <TextInput
          {...register('name')}
          isError={errors.name !== undefined}
          className='w-full'
          placeholder="Ім'я проєкту"
        />
      </div>
      <div>
        <label htmlFor='description' className=''>
          Короткий опис проєкту (декілька реченнь):
        </label>
        <TextInput
          {...register('description')}
          isError={errors.description !== undefined}
          className='w-full'
          placeholder='Опис проєкту'
        />
      </div>
      <div>
        <label htmlFor='bigImage' className=''>
          Посилання на велику іллюстрацію до проєкту:
        </label>
        <TextInput
          {...register('bigImage')}
          isError={errors.bigImage !== undefined}
          className='w-full'
          placeholder='Зображення'
        />
      </div>
      <div>
        <label htmlFor='smallImage' className=''>
          Посилання на малу та бажано квадратну іллюстрацію до проєкту:
        </label>
        <TextInput
          {...register('smallImage')}
          isError={errors.smallImage !== undefined}
          className='w-full'
          placeholder='Зображення'
        />
      </div>
      <div>
        <label htmlFor='longDescription' className=''>
          Довгий опис проєкту без обмежень по довжині:
        </label>
        <textarea
          {...register('longDescription')}
          rows={6}
          className={`w-full rounded-lg border-2 p-3 ${
            errors.longDescription !== undefined
              ? 'border-red-600 bg-red-50 outline-2 outline-red-600 focus:outline'
              : 'border-gray-200 bg-gray-100'
          }`}
        ></textarea>
      </div>
      <SubmitButton disabled={isValidationError}>Створити проєкт</SubmitButton>
      <ErrorsBlock
        errors={Object.values(errors).map((error) => error.message)}
      />
    </form>
  );
}

type TextInputProps = {
  isError?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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

type SubmitButtonProps = Omit<InputHTMLAttributes<HTMLButtonElement>, 'type'>;

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  function SubmitButton(
    { className, ...submitButtonProps }: SubmitButtonProps,
    ref
  ) {
    return (
      <button
        type='submit'
        {...submitButtonProps}
        className={twMerge(
          `rounded-lg bg-blue-500 p-3 font-semibold text-white transition-all hover:enabled:bg-blue-600 active:enabled:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-700`,
          className
        )}
        ref={ref}
      ></button>
    );
  }
);

const ErrorsBlock = ({
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
