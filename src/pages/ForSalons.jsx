import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const POINTS = [
	{
		title: "Knows every service length",
		body: "Colour, cut and blow-dry is 2 hours 15 with processing time in the middle. Corvel books the stylist around the processing gap instead of blocking it out.",
	},
	{
		title: "Stylist favourites",
		body: "Regulars almost always want the same person. Corvel offers their stylist first and only suggests someone else if they ask, or if it's a fill from the waitlist.",
	},
	{
		title: "Deposits without the awkward call",
		body: "For long services, Corvel texts a secure deposit link and only confirms the booking when it's paid. No-show fees are collected the same way.",
	},
	{
		title: "Rebook before they leave",
		body: "The evening after a visit, Corvel texts a rebooking nudge with two openings around the same interval as last time.",
	},
];

export default function ForSalons() {
	usePageMeta({
		title: "Corvel for clinics",
		description:
			"Text scheduling for hair, nail, lash and barber salons: books around processing time, offers each client their usual stylist, takes deposits and fills cancellations.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container split split-media">
					<div>
						<p className="eyebrow">For salons and spas</p>
						<h1>Keep the chairs full without living on your phone</h1>
						<p className="lede">
							Your clients already text you. Corvel answers between appointments, so your stylists can
							keep their hands in someone's hair instead of on a screen.
						</p>
						<Link to="/contact" className="button">
							Book a salon demo
						</Link>
					</div>
					<img
						src="/illustrations/salon.svg"
						alt="A salon chair and mirror beside a phone showing a booking confirmation"
						width="380"
						height="320"
					/>
				</div>
			</section>

			<section className="section">
				<div className="container grid-2">
					{POINTS.map((p) => (
						<div key={p.title} className="card">
							<h3>{p.title}</h3>
							<p>{p.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="section section-alt">
				<div className="container narrow">
					<h2>Built with salon owners</h2>
					<p>
						Our first ten salon customers spent a month with us rewriting how Corvel talks. It's short,
						warm and never uses three exclamation marks. You can change the tone and sign-off to sound
						like your front desk.
					</p>
					<p>
						Works with Vagaro, Boulevard, GlossGenius and Square Appointments.{" "}
						<Link to="/integrations">See all integrations</Link>.
					</p>
				</div>
			</section>
		</>
	);
}
