import { useState } from "react";
import { usePageMeta } from "../lib/usePageMeta.js";

export default function Contact() {
	usePageMeta({ title: "Contact" });
	const [form, setForm] = useState({ name: "", business: "", email: "", locations: "1", message: "" });

	function update(field) {
		return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
	}

	function submit(e) {
		e.preventDefault();
		const body = [
			`Name: ${form.name}`,
			`Business: ${form.business}`,
			`Locations: ${form.locations}`,
			"",
			form.message,
		].join("\n");
		window.location.href = `mailto:sales@usecorvel.com?subject=${encodeURIComponent(
			`Demo request: ${form.business || form.name}`,
		)}&body=${encodeURIComponent(body)}`;
	}

	return (
		<>
			<section className="page-head">
				<div className="container narrow">
					<h1>Book a demo</h1>
					<p className="lede">
						Twenty minutes, on your own calendar data if you like. We'll show you a week of texts from
						a business like yours and how Corvel handled them.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container split">
					<form className="form" onSubmit={submit}>
						<label>
							Your name
							<input required value={form.name} onChange={update("name")} autoComplete="name" />
						</label>
						<label>
							Business name
							<input required value={form.business} onChange={update("business")} autoComplete="organization" />
						</label>
						<label>
							Work email
							<input required type="email" value={form.email} onChange={update("email")} autoComplete="email" />
						</label>
						<label>
							Number of locations
							<select value={form.locations} onChange={update("locations")}>
								<option value="1">1</option>
								<option value="2-4">2 to 4</option>
								<option value="5+">5 or more</option>
							</select>
						</label>
						<label>
							Anything we should know?
							<textarea rows="4" value={form.message} onChange={update("message")} />
						</label>
						<button type="submit" className="button">
							Request a demo
						</button>
					</form>
					<div>
						<h2>Other ways to reach us</h2>
						<p>
							<strong>Sales</strong>
							<br />
							<a href="mailto:sales@usecorvel.com">sales@usecorvel.com</a>
						</p>
						<p>
							<strong>Support for customers</strong>
							<br />
							<a href="mailto:help@usecorvel.com">help@usecorvel.com</a>, or text (503) 555-0148,
							Monday to Saturday, 6 a.m. to 8 p.m. Pacific.
						</p>
						<p>
							<strong>Press and partnerships</strong>
							<br />
							<a href="mailto:hello@usecorvel.com">hello@usecorvel.com</a>
						</p>
						<p className="muted">Corvel Labs, Inc. · 1120 SE Grand Ave, Suite 300, Portland, OR 97214</p>
					</div>
				</div>
			</section>
		</>
	);
}
