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

const signUpFormSchema = z.object({
  firstName: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
  lastName: z.string().min(3, 'O sobrenome deve conter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'A senha deve conter pelo menos 8 caracteres'),
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  return (
    <form noValidate className="max-w-3xl w-full" onSubmit={handleSubmit(fakeSubmit)}>
      <Heading className="font-semibold text-xl">Cadastre-se</Heading>

      <Text className="mt-2">
        Já tem uma conta?{' '}
        <LinkButton to="/" className="inline font-semibold text-zinc-300 hover:underline">
          Clique aqui para entrar
        </LinkButton>
        !
      </Text>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <Input
          type="text"
          id="firstName"
          label="Nome"
          errorFeedback={errors.firstName?.message}
          className="w-full"
          disabled={isSubmitting}
          {...register('firstName')}
        />

        <Input
          type="text"
          id="lastName"
          label="Sobrenome"
          errorFeedback={errors.lastName?.message}
          className="w-full"
          disabled={isSubmitting}
          {...register('lastName')}
        />

        <Input
          type="email"
          id="email"
          label="E-mail"
          errorFeedback={errors.email?.message}
          className="w-full"
          disabled={isSubmitting}
          {...register('email')}
        />

        <Input
          type="password"
          id="password"
          label="Senha"
          errorFeedback={errors.password?.message}
          className="w-full"
          disabled={isSubmitting}
          {...register('password')}
        />
      </div>

      <Button type="submit" className="mt-4" loading={isSubmitting}>
        Criar conta
      </Button>

      <Separator className="my-10" label="ou" />

      <GoogleButton disabled={isSubmitting}>Cadastrar com o Google</GoogleButton>
    </form>
  );
}
