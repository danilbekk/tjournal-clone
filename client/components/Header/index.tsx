import React, { useState } from 'react';
import { Avatar, Button, IconButton, Paper } from '@mui/material';
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  Create as PenIcon,
  AccountCircleOutlined as UserIcon
} from '@mui/icons-material';
import styles from './Header.module.scss';
import Link from 'next/link';
import { AuthDialog } from '../AuthDialog';

export const Header: React.FC = () => {
  const [token, setToken] = useState(false)
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };


  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
        <Link href={'/write'} passHref>
          <Button className={styles.penButton} variant="contained" color='inherit'>
            Новая запись
          </Button>

        </Link>

      </div>
      {token ?
        <div className="d-flex align-center">
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <NotificationIcon />
          </IconButton>
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg"
              />
              <ArrowBottom />
            </a>
          </Link>
        </div> :
        <div className={styles.loginButton} onClick={openAuthDialog}>
          <UserIcon />
          Войти
        </div>
      }
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};
