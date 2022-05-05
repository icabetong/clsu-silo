import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button, Box, Center, LoadingOverlay, Stack, TextInput, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../index";
import { FirebaseError } from "firebase/app";

type FormValues = {
  email: string,
  password: string
}

const AuthPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isWorking, setWorking] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const form = useForm<FormValues>({ initialValues: { email: "", password: "" } });

  const onSubmit = (values: FormValues) => {
    setWorking(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => navigate('/'))
      .catch((error: FirebaseError) => setError(error))
      .finally(() => setWorking(false));
  }

  return (
    <Center style={{ minHeight: '100vh' }}>
      <Box component="form" onSubmit={form.onSubmit(onSubmit)} sx={{ position: 'relative' }}>
        <LoadingOverlay visible={isWorking}/>
        <Stack>
          <Box>
            <Title order={2}>{t("authentication.header")}</Title>
            <Text color="gray">{t("authentication.subheader")}</Text>
          </Box>
          <TextInput
            type="email"
            label={t("field.email")}
            placeholder={t("placeholder.email")}
            {...form.getInputProps('email')}/>
          <TextInput
            type="password"
            label={t("field.password")}
            placeholder={t("placeholder.password")}
            {...form.getInputProps('password')}/>
          <Button type="submit">{t("button.sign-in")}</Button>
        </Stack>
      </Box>
    </Center>
  )
}
export default AuthPage;
