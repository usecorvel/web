import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV = [
	{ to: "/how-it-works", label: "How it works" },
	{ to: "/for-clinics", label: "Clinics" },
	{ to: "/for-salons", label: "Salons" },
	{ to: "/pricing", label: "Pricing" },
	{ to: "/about", label: "About" },
];

export default function SiteHeader() {
	const [open, setOpen] = useState(false);

	return (
		<header className="site-header">
			<div className="container header-inner">
				<Link to="/" className="brand" onClick={() => setOpen(false)}>
					<img src="/logo.svg" alt="Corvel" width="120" height="32" />
				</Link>
				<button
					type="button"
					className="nav-toggle"
					aria-expanded={open}
					aria-controls="site-nav"
					onClick={() => setOpen((v) => !v)}
				>
					Menu
				</button>
				<nav id="site-nav" className={open ? "site-nav open" : "site-nav"}>
					{NAV.map((item) => (
						<NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
							{item.label}
						</NavLink>
					))}
					<a href="https://blog.usecorvel.com">Blog</a>
					<Link to="/contact" className="button button-small" onClick={() => setOpen(false)}>
						Book a demo
					</Link>
				</nav>
			</div>
		</header>
	);
}
