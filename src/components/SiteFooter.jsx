import { Link } from "react-router-dom";

export default function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="container footer-grid">
				<div>
					<img src="/logo.svg" alt="Corvel" width="104" height="28" />
					<p className="muted">
						The scheduling assistant that answers your texts, books the chair and fills the gaps.
					</p>
				</div>
				<div>
					<h3>Product</h3>
					<ul>
						<li><Link to="/how-it-works">How it works</Link></li>
						<li><Link to="/pricing">Pricing</Link></li>
						<li><Link to="/integrations">Integrations</Link></li>
					</ul>
				</div>
				<div>
					<h3>Who it's for</h3>
					<ul>
						<li><Link to="/for-clinics">Clinics</Link></li>
						<li><Link to="/for-salons">Salons and spas</Link></li>
						<li><Link to="/for-physical-therapy">Physical therapy</Link></li>
						<li><Link to="/for-chiropractors">Chiropractors</Link></li>
						<li><Link to="/for-barbershops">Barbershops</Link></li>
					</ul>
				</div>
				<div>
					<h3>Company</h3>
					<ul>
						<li><Link to="/about">About</Link></li>
						<li><a href="https://blog.usecorvel.com">Blog</a></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</div>
			</div>
			<div className="container footer-base">
				<span>© {year} Corvel Labs, Inc. Portland, Oregon.</span>
				<span>Message and data rates may apply to texts sent by your clients.</span>
			</div>
		</footer>
	);
}
