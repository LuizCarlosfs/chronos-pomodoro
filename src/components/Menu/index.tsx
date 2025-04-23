import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
  TimerIcon,
} from 'lucide-react';
import styles from './style.module.css';
import { useState, useEffect } from 'react';
//import { useTheme } from '../../hooks/useTheme';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  //const [theme, setTheme] = useState<AvailableThemes>('dark');
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    //document.documentElement.setAttribute('data-theme', theme);
  }

  // useEffect(() => {
  //   console.log('useEffect sem dependencias', Date.now());
  // });   // executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log(' useEffect com array deps vazio', Date.now());
  // }, []); //executado apenas uma vez quando o componente é montado

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    //console.log('Olha, este componente será atualizado');
  }, [theme]); // executa apenas quando o valor de theme muda

  return (
    <div className={styles.menu}>
  
       <a
        className={styles.menuLink}
        href='#'
        aria-label='ir para a Home'
        title='ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='ver histórico'
        title='ver histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='configurações'
        title='configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='mudar tema'
        title='mudar tema'
        onClick={handleThemeChange}
      >
        {/* <SunIcon /> */}
        {nextThemeIcon[theme]}

      </a>
    </div>
  );
}