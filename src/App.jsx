import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import ForClinics from "./pages/ForClinics.jsx";
import ForSalons from "./pages/ForSalons.jsx";
import ForPhysicalTherapy from "./pages/ForPhysicalTherapy.jsx";
import ForChiropractors from "./pages/ForChiropractors.jsx";
import ForBarbershops from "./pages/ForBarbershops.jsx";
import Integrations from "./pages/Integrations.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="how-it-works" element={<HowItWorks />} />
				<Route path="for-clinics" element={<ForClinics />} />
				<Route path="for-salons" element={<ForSalons />} />
				<Route path="for-physical-therapy" element={<ForPhysicalTherapy />} />
				<Route path="for-chiropractors" element={<ForChiropractors />} />
				<Route path="for-barbershops" element={<ForBarbershops />} />
				<Route path="integrations" element={<Integrations />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
