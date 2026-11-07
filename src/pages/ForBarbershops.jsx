import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const POINTS = [
	{
		title: "Their usual barber, first",
		body: "Regulars almost always want the same person. Corvel offers their barber first and only suggests someone else if they ask, or if it's a fill from the waitlist.",
	},
	{
		title: "Knows every service length",
		body: "A skin fade, a beard trim and a cut-and-shave each take a different amount of time. Corvel books what fits in each barber's day instead of guessing.",
	},
	{
		title: "Empty chairs filled from the waitlist",
		body: "When someone cancels, Corvel texts waitlisted clients who want that time, one at a time, and can keep trying right up to 45 minutes before the slot.",
	},
	{
		title: "No-show fees without the awkward call",
		body: "Corvel texts a secure link for deposits and no-show fees, so nobody at the shop has to chase a client for payment.",
	},
];

export default function ForBarbershops() {
	usePageMeta({
		title: "Corvel for barbershops",
		description:
			"Waitlist automation for barbershops: Corvel books clients with their usual barber by text, collects no-show fees and fills cancelled chairs from the waitlist.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container split split-media">
					<div>
						<p className="eyebrow">For barbershops</p>
						<h1>Stop losing chairs to last-minute cancellations</h1>
						<p className="lede">
							Your clients text to book, move and cancel while you're mid-fade. Corvel answers for
							you, books them with their regular barber and puts someone from the waitlist in any chair
							that opens up.
						</p>
						<Link to="/contact" className="button">
							Book a barbershop demo
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
					<h2>The numbers behind it</h2>
					<p>
						Across 212 Corvel locations from January to June 2026, 71% of cancelled slots were refilled
						within 24 hours, the median reply to a client text took 38 seconds, and front desks saved
						6.5 hours of phone time a week.
					</p>
					<p>
						Works with Vagaro, GlossGenius and Square Appointments.{" "}
						<Link to="/integrations">See all integrations</Link>.
					</p>
				</div>
			</section>
		</>
	);
}
