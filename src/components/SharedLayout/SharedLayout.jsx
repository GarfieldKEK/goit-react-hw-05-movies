import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import style from '../style.module.css';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav className={style.navigation}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
