import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const POINTS = [
	{
		title: "Confirmations patients actually answer",
		body: "Corvel texts a reminder before each adjustment and asks the patient to confirm. A “yes” is noted in your calendar; a “can't make it” turns into a reschedule on the spot.",
	},
	{
		title: "Reschedules in the same thread",
		body: "It checks live availability in your scheduler and replies with two or three openings with the right doctor and visit length. No portal, no app to download.",
	},
	{
		title: "Cancelled adjustments filled from the waitlist",
		body: "When a slot opens, Corvel texts waitlisted patients who asked for that time, one at a time, until someone takes it. Two people are never offered the same slot.",
	},
	{
		title: "HIPAA by default",
		body: "Signed BAA on every plan, encrypted messages, role-based access for staff and a full audit trail of who saw what.",
	},
];

export default function ForChiropractors() {
	usePageMeta({
		title: "Corvel for chiropractic offices",
		description:
			"Text-based appointment confirmation for chiropractic offices: Corvel confirms and reschedules adjustments by text in your existing scheduler and fills cancellations from the waitlist.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container split split-media">
					<div>
						<p className="eyebrow">For chiropractic offices</p>
						<h1>Confirmed adjustments, without the reminder calls</h1>
						<p className="lede">
							Your front desk spends the morning calling patients to confirm, leaving voicemails and
							waiting for callbacks. Corvel confirms every visit by text, moves the ones that need
							moving and fills the gaps from your waitlist.
						</p>
						<Link to="/contact" className="button">
							Book a chiropractic demo
						</Link>
					</div>
					<img
						src="/illustrations/clinic.svg"
						alt="A treatment room with a calendar on the wall"
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
						within 24 hours, the median reply to a patient text took 38 seconds, and front desks saved
						6.5 hours of phone time a week.
					</p>
					<p>
						Works with Jane, Cliniko and Google Calendar.{" "}
						<Link to="/integrations">See all integrations</Link>.
					</p>
				</div>
			</section>
		</>
	);
}
