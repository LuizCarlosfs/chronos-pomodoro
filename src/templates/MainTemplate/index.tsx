import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { MainForm } from '../../components/MainForm';
import { Menu } from '../../components/Menu';

export function MainTemplate() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
