import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const POINTS = [
	{
		title: "Provider-aware booking",
		body: "Corvel knows Dr. Lin only does new-patient evaluations on Tuesdays and that dry needling needs a 45-minute slot. It offers only what fits.",
	},
	{
		title: "Your cancellation policy, enforced politely",
		body: "Inside your 24- or 48-hour window it explains the fee, offers the next opening and records the client's answer. Outside the window it just moves them.",
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

export default function ForClinics() {
	usePageMeta({
		title: "Corvel for clinics",
		description:
			"Text scheduling for physical therapy, chiropractic, dental and med spa clinics: provider-aware booking, cancellation policies, intake reminders and a signed BAA.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container split split-media">
					<div>
						<p className="eyebrow">For clinics</p>
						<h2 className="display">Fewer empty treatment rooms, fewer calls on hold</h2>
						<p className="lede">
							Patients cancel by text at 6 a.m. and expect an answer. Corvel gives them one, keeps your
							providers' schedules intact and puts someone from the waitlist in the gap.
						</p>
						<Link to="/contact" className="button">
							Book a clinic demo
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
					<h2>What clinics tell us after 90 days</h2>
					<p>
						The front desk stops being the bottleneck for rescheduling. At Harbor Spine &amp; Sport in
						Tacoma, 64% of reschedules now happen entirely by text, and the clinic recovered an
						average of 11 visits a week that used to go unfilled.
					</p>
					<p>
						Works with Jane, Cliniko, Prompt and Google Calendar.{" "}
						<Link to="/integrations">See all integrations</Link>.
					</p>
				</div>
			</section>
		</>
	);
}
