import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://usecorvel.com";
const SITE_NAME = "Corvel";

function upsert(selector, create) {
	let el = document.head.querySelector(selector);
	if (!el) {
		el = create();
		document.head.appendChild(el);
	}
	return el;
}

/**
 * Sets the document title, meta description and canonical URL for the current route.
 * The site is rendered in the browser, so every page calls this once at the top.
 */
export function usePageMeta({ title, description }) {
	const { pathname } = useLocation();

	useEffect(() => {
		document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

		if (description) {
			const meta = upsert('meta[name="description"]', () => {
				const m = document.createElement("meta");
				m.setAttribute("name", "description");
				return m;
			});
			meta.setAttribute("content", description);
		}

		const canonical = upsert('link[rel="canonical"]', () => {
			const l = document.createElement("link");
			l.setAttribute("rel", "canonical");
			return l;
		});
		canonical.setAttribute("href", `${SITE_URL}${pathname === "/" ? "" : pathname}`);
	}, [title, description, pathname]);
}
