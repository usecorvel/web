import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const POINTS = [
	{
		title: "Reschedules without phone tag",
		body: "“Can I move Thursday's session to next week?” Corvel checks your scheduler and replies with two real openings for the same therapist and visit length. The patient taps one and it's booked.",
	},
	{
		title: "Your cancellation policy, enforced politely",
		body: "Inside your 24- or 48-hour window it explains the fee, offers the next opening and records the patient's answer. Outside the window it just moves them.",
	},
	{
		title: "Intake before the first visit",
		body: "New patients get your intake form link right after booking, and a reminder the day before if it isn't done.",
	},
	{
		title: "HIPAA by default",
		body: "Signed BAA on every plan, encrypted messages, role-based access for staff and a full audit trail of who saw what.",
	},
];

export default function ForPhysicalTherapy() {
	usePageMeta({
		title: "Corvel for physical therapy clinics",
		description:
			"Automated text rescheduling for physical therapy clinics: Corvel moves visits by text inside Jane, Cliniko or Prompt, enforces your cancellation policy and fills open slots from the waitlist.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container split split-media">
					<div>
						<p className="eyebrow">For physical therapy clinics</p>
						<h1>Keep every plan of care on the calendar</h1>
						<p className="lede">
							Patients text at 7 a.m. to move today's session, right when your front desk is checking
							people in. Corvel answers in seconds, rebooks them with the right therapist and offers
							the empty slot to someone on your waitlist.
						</p>
						<Link to="/contact" className="button">
							Book a PT clinic demo
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
					<h2>Started in a PT clinic</h2>
					<p>
						Corvel's co-founder ran operations for a nine-location physical therapy group, where the
						busiest hour of the day was patients texting to cancel before anyone was there to answer.
						Across 212 Corvel locations from January to June 2026, 71% of cancelled slots were refilled
						within 24 hours, the median reply to a text took 38 seconds, and front desks saved 6.5
						hours of phone time a week.
					</p>
					<div className="quote">
						<blockquote>
							“We used to lose four or five appointments a week to late cancellations. Now the waitlist
							picks them up and I find out from the calendar, not the phone.”
						</blockquote>
						<p className="muted">Renata Alvarez, owner, Fieldhouse Physical Therapy, Boise</p>
					</div>
					<p>
						Works with Jane, Cliniko, Prompt (including plan-of-care visits) and Google Calendar.{" "}
						<Link to="/integrations">See all integrations</Link>.
					</p>
				</div>
			</section>
		</>
	);
}
