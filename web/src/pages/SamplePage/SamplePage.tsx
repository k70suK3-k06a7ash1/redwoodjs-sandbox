import { Link, routes } from "@redwoodjs/router";
import { Metadata } from "@redwoodjs/web";

const SamplePage = () => {
	return (
		<>
			<Metadata title="Sample" description="Sample page" />

			<h1>SamplePage</h1>
			<p>
				Find me in <code>./web/src/pages/SamplePage/SamplePage.tsx</code>
			</p>
			<p>
				My default route is named <code>sample</code>, link to me with `
				<Link to={routes.sample()}>Sample</Link>`
			</p>
		</>
	);
};

export default SamplePage;
