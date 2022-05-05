import { AppShell, Header, Navbar } from "@mantine/core";

const MainPage = () => {
  return (
    <AppShell
      navbar={<Navbar width={{ base: 300 }} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}>
      <div></div>
    </AppShell>
  )
}

export default MainPage;