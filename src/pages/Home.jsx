import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

const STEPS = [
	{
		title: "A client texts your number",
		body: "“Can I move Thursday to next week?” Corvel reads it, checks the calendar you already use and replies with two real openings.",
	},
	{
		title: "They tap a time",
		body: "The booking lands in your scheduler with the right provider, service length and buffer. No portal, no app to download.",
	},
	{
		title: "The old slot goes back out",
		body: "Corvel texts the people on your waitlist who want that time, one at a time, until someone takes it.",
	},
];

const NUMBERS = [
	{ value: "71%", label: "of cancelled slots refilled within 24 hours" },
	{ value: "38 sec", label: "median reply time to a client text" },
	{ value: "6.5 hrs", label: "of front-desk phone time saved per week" },
];

export default function Home() {
	usePageMeta({
		title: "Text-based scheduling for clinics and salons",
		description:
			"Corvel answers client texts, books and reschedules appointments in your existing calendar, and fills last-minute cancellations from your waitlist.",
	});

	return (
		<>
			<section className="hero">
				<div className="container hero-grid">
					<div>
						<p className="eyebrow">Scheduling assistant for clinics and salons</p>
						<h1>Your front desk, answering texts at 11 p.m.</h1>
						<p className="lede">
							Corvel books, reschedules and confirms appointments by text, right inside the calendar you
							already use. When someone cancels, it fills the slot before you notice it was empty.
						</p>
						<div className="actions">
							<Link to="/contact" className="button">
								Book a 20-minute demo
							</Link>
							<Link to="/how-it-works" className="button button-ghost">
								See how it works
							</Link>
						</div>
						<p className="fine">From $79 a month per location. Live in a week, no contract.</p>
					</div>
					<img
						src="/illustrations/phone-thread.svg"
						alt="A client text conversation rescheduling a Thursday appointment to the following Tuesday"
						width="420"
						height="460"
					/>
				</div>
			</section>

			<section className="band">
				<div className="container stats">
					{NUMBERS.map((n) => (
						<div key={n.label} className="stat">
							<strong>{n.value}</strong>
							<span>{n.label}</span>
						</div>
					))}
				</div>
				<p className="container fine">Across 212 Corvel locations, January to June 2026.</p>
			</section>

			<section className="section">
				<div className="container">
					<h2>Three texts, no phone tag</h2>
					<ol className="steps">
						{STEPS.map((s, i) => (
							<li key={s.title}>
								<span className="step-number">{i + 1}</span>
								<h3>{s.title}</h3>
								<p>{s.body}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="section section-alt">
				<div className="container split">
					<div className="card">
						<h2>For clinics</h2>
						<p>
							Physical therapy, chiropractic, dental hygiene and med spas. Corvel respects provider
							schedules, intake forms and the 48-hour cancellation policy you already have.
						</p>
						<Link to="/for-clinics">Corvel for clinics →</Link>
					</div>
					<div className="card">
						<h2>For salons</h2>
						<p>
							Hair, nails, lashes and barbers. It knows a balayage takes three hours and a fringe trim
							takes ten minutes, and it won't book them back to back with the same stylist.
						</p>
						<Link to="/for-salons">Corvel for salons →</Link>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container quote">
					<blockquote>
						“We used to lose four or five appointments a week to late cancellations. Now the waitlist
						picks them up and I find out from the calendar, not the phone.”
					</blockquote>
					<p className="muted">Renata Alvarez, owner, Fieldhouse Physical Therapy, Boise</p>
				</div>
			</section>
		</>
	);
}
