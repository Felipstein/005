import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './components/Button';
import { GoogleButton } from './components/GoogleButton';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { LinkButton } from './components/LinkButton';
import { Separator } from './components/Separator';
import { Text } from './components/Text';
import { fakeSubmit } from './utils';

const loginFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'A senha deve conter pelo menos 8 caracteres'),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(fakeSubmit)}
      className="max-w-xl w-full"
    >
      <Heading className="font-semibold text-xl">Acesse a sua conta</Heading>

      <Text className="mt-2">
        Ainda não é cadastrado?{' '}
        <LinkButton
          to="/sign-up"
          className="inline font-semibold text-zinc-300 hover:underline"
        >
          Cadastre-se
        </LinkButton>
        .
      </Text>

      <Input
        type="email"
        id="email"
        label="E-mail"
        errorFeedback={errors.email?.message}
        className={{ root: 'mt-8' }}
        disabled={isSubmitting}
        {...register('email')}
      />

      <div className="mt-4 flex flex-col items-end">
        <Input
          type="password"
          id="password"
          label="Senha"
          errorFeedback={errors.password?.message}
          className={{ root: 'w-full' }}
          disabled={isSubmitting}
          {...register('password')}
        />

        <LinkButton to="/forgot-password" className="mt-1">
          Esqueceu sua senha?
        </LinkButton>
      </div>

      <Button type="submit" className="mt-4" loading={isSubmitting}>
        Entrar
      </Button>

      <Separator className="my-10" label="ou" />

      <GoogleButton disabled={isSubmitting}>Entrar com o Google</GoogleButton>
    </form>
  );
}
