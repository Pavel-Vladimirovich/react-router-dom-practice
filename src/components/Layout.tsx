import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.scss"



export const Layout = () => {
	return (
		<div className={s.wrapper}>
			<header className={`${s.header}`}>
				<div className={`${s.topHeader}`}>
					<div className={s.container}>
						<ul>
							<li><NavLink className={({isActive})=>isActive? s.active:''} to="/">Home</NavLink></li>
							<li><NavLink className={({isActive})=>isActive? s.active:''} to="/blogpage">Blog</NavLink></li>
							<li><NavLink className={({isActive})=>isActive? s.active:''} to="/aboutpage">About Us</NavLink></li>
						</ul>
					</div>

				</div>
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