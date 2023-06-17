'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ErrorsBlock, Button, TextInput } from '../form-utils';

const schema = z.object({
  username: z.string().min(1, "Ім'я користувача є обов'язковим"),
  password: z.string().min(1, "Пароль є обов'язковим")
});

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  });

  const isValidationError = !Object.values(errors).every(
    (error) => error === undefined
  );

  return (
    <form
      className='flex max-w-prose flex-col gap-4'
      onSubmit={(e) => void handleSubmit((data) => console.log(data))(e)}
    >
      <h1 className='text-3xl font-bold'>Увійти до акаунту</h1>
      <fieldset>
        <label htmlFor='username'>Ім&apos;я користувача</label>
        <TextInput
          id='username'
          isError={errors.username !== undefined}
          {...register('username')}
          className='w-full'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='password'>Пароль</label>
        <TextInput
          id='password'
          isError={errors.password !== undefined}
          {...register('password')}
          className='w-full'
        />
      </fieldset>

      <Button type='submit' disabled={isValidationError}>
        Увійти
      </Button>
      <ErrorsBlock
        errors={Object.values(errors).map((error) => error.message)}
      />
    </form>
  );
}
