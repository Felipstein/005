import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { LinkButton } from './components/LinkButton';
import { Text } from './components/Text';
import { fakeSubmit } from './utils';

const forgotPasswordFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordFormSchema>;

export function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  return (
    <form noValidate onSubmit={handleSubmit(fakeSubmit)} className="max-w-xl">
      <LinkButton to="/" icon={ArrowLeft}>
        Login
      </LinkButton>

      <Heading className="mt-3">Recuperar conta</Heading>

      <Text className="mt-1">
        Informe o e-mail da sua conta para te enviarmos um e-mail com as instruções de recuperação da sua conta.
      </Text>

      <Input
        type="email"
        id="email"
        label="E-mail"
        className={{ root: 'mt-6' }}
        errorFeedback={errors.email?.message}
        disabled={isSubmitting}
        {...register('email')}
      />

      <Button type="submit" className="mt-4" loading={isSubmitting}>
        Recuperar conta
      </Button>
    </form>
  );
}
