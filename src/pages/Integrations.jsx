import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const GROUPS = [
	{
		name: "Clinic schedulers",
		items: [
			{ name: "Jane", note: "Two-way sync, provider schedules, intake forms" },
			{ name: "Cliniko", note: "Two-way sync, appointment types, cancellation reasons" },
			{ name: "Prompt", note: "Two-way sync for PT clinics, including plan-of-care visits" },
		],
	},
	{
		name: "Salon schedulers",
		items: [
			{ name: "Vagaro", note: "Two-way sync, processing time, deposits" },
			{ name: "Boulevard", note: "Two-way sync, stylist levels, waitlist" },
			{ name: "GlossGenius", note: "Two-way sync, deposits" },
			{ name: "Square Appointments", note: "Two-way sync, no-show fees through Square" },
		],
	},
	{
		name: "Everything else",
		items: [
			{ name: "Google Calendar", note: "For solo providers and small teams without a scheduler" },
			{ name: "Microsoft 365", note: "Outlook calendars, one per provider" },
			{ name: "Stripe", note: "Deposits and no-show fees if your scheduler doesn't take payments" },
		],
	},
];

export default function Integrations() {
	usePageMeta({
		title: "Integrations",
		description:
			"Corvel works inside the scheduler you already use: Jane, Cliniko, Prompt, Vagaro, Boulevard, GlossGenius, Square Appointments, Google Calendar and Microsoft 365.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container">
					<h1>Works with the calendar you already have</h1>
					<p className="lede">
						Corvel doesn't replace your scheduler. It reads availability from it and writes bookings
						back to it, so your team keeps working the way they do today.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container">
					{GROUPS.map((g) => (
						<div key={g.name} className="integration-group">
							<h2>{g.name}</h2>
							<ul className="integration-list">
								{g.items.map((i) => (
									<li key={i.name}>
										<strong>{i.name}</strong>
										<span className="muted">{i.note}</span>
									</li>
								))}
							</ul>
						</div>
					))}
					<p>
						Using something else? <Link to="/contact">Tell us</Link>. We add a new scheduler every
						couple of months, usually because a customer asked.
					</p>
				</div>
			</section>
		</>
	);
}
