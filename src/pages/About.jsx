import { usePageMeta } from "../lib/usePageMeta.js";

const TEAM = [
	{ name: "Priya Raman", role: "Co-founder, CEO", bio: "Ran operations for a 9-location physical therapy group before Corvel." },
	{ name: "Daniel Okafor", role: "Co-founder, CTO", bio: "Built messaging infrastructure at a payments company for six years." },
	{ name: "Hana Sato", role: "Head of Customer Success", bio: "Former salon manager; onboards every new salon herself." },
	{ name: "Marcus Bell", role: "Engineering", bio: "Owns scheduler integrations and the waitlist engine." },
];

export default function About() {
	usePageMeta({
		title: "About",
		description:
			"Corvel was founded in Portland, Oregon in 2023 by Priya Raman and Daniel Okafor to give small clinics and salons a front desk that never misses a text.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container narrow">
					<h1>We started at a front desk</h1>
					<p className="lede">
						Priya spent four years running scheduling for a physical therapy group in Portland. The
						busiest hour of every day was 7 to 8 a.m., when patients texted the clinic's number to
						cancel and nobody was there to answer.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container narrow">
					<p>
						She and Daniel founded Corvel in 2023 to answer those texts. The first version handled
						only cancellations for one clinic. Today Corvel runs the text line for more than 200
						clinics and salons across the US and Canada, and books around 40,000 appointments a month.
					</p>
					<p>
						We're 14 people, mostly in Portland, with a few in Vancouver and Austin. We're backed by
						operators who've run clinics, salons and franchise groups, and by Cascade Seed Fund.
					</p>
					<h2>What we believe</h2>
					<ul className="checks">
						<li>Clients should be able to book the way they already talk: by text.</li>
						<li>Software should fit around a business's rules, not the other way round.</li>
						<li>When the assistant isn't sure, a person should decide.</li>
					</ul>
				</div>
			</section>

			<section className="section section-alt">
				<div className="container">
					<h2>Some of the team</h2>
					<div className="team">
						{TEAM.map((t) => (
							<div key={t.name} className="card">
								<h3>{t.name}</h3>
								<p className="muted">{t.role}</p>
								<p>{t.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
