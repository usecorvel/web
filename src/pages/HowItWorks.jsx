import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

export default function HowItWorks() {
	usePageMeta({
		title: "How it works",
		description:
			"How Corvel books and reschedules appointments by text, what it does when it isn't sure, and how the waitlist fills a cancelled slot in minutes.",
	});

	return (
		<>
			<section className="page-head">
				<div className="container">
					<p className="eyebrow">How it works</p>
					<h1>It reads the text, checks the calendar, and asks before it guesses</h1>
					<p className="lede">
						Corvel sits between your business number and your scheduler. Here is what happens to a
						message from the moment it arrives.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container split split-media">
					<div>
						<h2>1. Understand the request</h2>
						<p>
							Clients don't write in forms. “Can Maya do my roots sometime after work next week” is a
							booking request with a provider, a service and a time window. Corvel pulls those out,
							matches the client to their record by phone number and looks up what they usually book.
						</p>
						<h2>2. Offer real openings</h2>
						<p>
							It reads live availability from your scheduler, applies your rules (buffers, provider
							skills, room or chair limits, new-client slots) and offers two or three times that
							actually work. Nothing is held until the client picks one.
						</p>
						<h2>3. Book it where you work</h2>
						<p>
							The appointment is written straight into your calendar, with a note that Corvel booked
							it. Your team sees it the same way they'd see one they typed in themselves.
						</p>
					</div>
					<img src="/illustrations/calendar-slots.svg" width="400" height="360" />
				</div>
			</section>

			<section className="section section-alt">
				<div className="container narrow">
					<h2>When a slot opens up</h2>
					<p>
						A cancellation, a no-show flagged by your team, or a reschedule frees a slot. If you're on the
						Growth plan, Corvel checks your waitlist for clients who asked for that provider, service and
						time of day, then texts them one at a time. Each person gets ten minutes to reply “yes”
						before the next one is asked, so two people are never offered the same slot.
					</p>
					<p>
						You choose how close to the appointment it keeps trying. Most clinics stop at two hours
						out; most salons go right up to 45 minutes.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container narrow">
					<h2>When it isn't sure</h2>
					<p>
						If a message is about something other than scheduling (a billing question, a complaint, a
						photo of a rash), or Corvel can't match the request to a service with confidence, it hands
						the thread to your team in the inbox and tells the client someone will reply shortly. It
						never invents a price, a diagnosis or a policy.
					</p>
					<p>
						Every conversation is in your Corvel inbox, so you can read exactly what was said and take
						over at any point.
					</p>
					<p>
						<Link to="/integrations">See which schedulers Corvel works with →</Link>
					</p>
				</div>
			</section>
		</>
	);
}
