import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <p>
        <a href=''>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com amor
        </a>
      </p>
    </footer>
  );
}
