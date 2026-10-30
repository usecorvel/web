import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta.js";

export default function NotFound() {
	usePageMeta({ title: "Page not found" });

	return (
		<section className="page-head">
			<div className="container narrow">
				<h1>We couldn't find that page</h1>
				<p className="lede">
					It may have moved. Try the <Link to="/">home page</Link> or{" "}
					<Link to="/contact">get in touch</Link>.
				</p>
			</div>
		</section>
	);
}
