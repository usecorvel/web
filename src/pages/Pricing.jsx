import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const PLANS = [
	{
		name: "Starter",
		price: "$99",
		unit: "per location / month",
		blurb: "For a single location with a small team.",
		features: [
			"Up to 4 provider calendars",
			"Booking, rescheduling and cancellations by text",
			"Appointment reminders and confirmations",
			"1,000 outbound texts a month",
			"Email support",
		],
	},
	{
		name: "Growth",
		price: "$189",
		unit: "per location / month",
		blurb: "For busy locations that live and die by the waitlist.",
		features: [
			"Unlimited provider calendars",
			"Everything in Starter",
			"Automatic waitlist fill for cancellations",
			"Deposits and no-show fees by text",
			"3,000 outbound texts a month",
			"Chat and phone support",
		],
		featured: true,
	},
	{
		name: "Group",
		price: "Custom",
		unit: "5+ locations",
		blurb: "For groups and franchises that share clients across sites.",
		features: [
			"Everything in Growth",
			"Cross-location booking and waitlists",
			"Group reporting and owner dashboard",
			"SSO and audit log",
			"Named onboarding lead",
		],
	},
];

const FAQ = [
	{
		q: "What happens if we go over our texts?",
		a: "Extra texts are $0.02 each in the US and Canada. We email you at 80% so it's never a surprise.",
	},
	{
		q: "Is there a contract or setup fee?",
		a: "No. Plans are month to month and setup is included. Annual billing takes 15% off.",
	},
	{
		q: "Do we need a new phone number?",
		a: "No. We can text-enable the landline your clients already have, or give you a new local number in minutes.",
	},
	{
		q: "Is Corvel HIPAA compliant?",
		a: "Yes. Clinics on any plan get a signed BAA, and messages are encrypted in transit and at rest.",
	},
];

export default function Pricing() {
	usePageMeta({
		title: "Pricing",
		description:
			"Corvel pricing: Starter is $99 per location a month, Growth with automatic waitlist fill is $189, and groups of five or more locations get custom pricing.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container">
					<h1>Priced per location, not per seat</h1>
					<p className="lede">
						Add as many front-desk staff as you like. Every plan includes setup, a local number and a
						signed BAA for clinics.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container plans">
					{PLANS.map((p) => (
						<div key={p.name} className={p.featured ? "plan plan-featured" : "plan"}>
							{p.featured && <span className="badge">Most popular</span>}
							<h2>{p.name}</h2>
							<p className="price">
								<strong>{p.price}</strong> <span>{p.unit}</span>
							</p>
							<p className="muted">{p.blurb}</p>
							<ul className="checks">
								{p.features.map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>
							<Link to="/contact" className={p.featured ? "button" : "button button-ghost"}>
								{p.price === "Custom" ? "Talk to sales" : "Start a 14-day trial"}
							</Link>
						</div>
					))}
				</div>
			</section>

			<section className="section section-alt">
				<div className="container narrow">
					<h2>Questions we get a lot</h2>
					<dl className="faq">
						{FAQ.map((item) => (
							<div key={item.q}>
								<dt>{item.q}</dt>
								<dd>{item.a}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>
		</>
	);
}
