import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.scss"

export const Layout = () => {
	return (
		<div className={s.wrapper}>
			<header className={s.header}>
				<ul>
					<li><NavLink className={(data) => data.isActive ? s.active : ''} to="/">Homepage</NavLink></li>
					<li><NavLink className={(data) => data.isActive ? s.active : ''} to="/blogpage">Blogpage</NavLink></li>
					<li><NavLink className={(data) => data.isActive ? s.active : ''} to="/aboutpage">About Us</NavLink></li>
				</ul>
			</header>
			<main className={s.main}>
				<div className={s.container}>
					<Outlet />
				</div>
			</main>
			<footer className={s.footer}>
			<div className={s.container}>
				<ul>
					<li>adress</li>
					<li>phone</li>
					<li>social</li>
					<li>write us</li>
				</ul>
			</div>
			</footer>
		</div>
	)
}