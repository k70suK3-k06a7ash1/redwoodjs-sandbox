import { render } from "@redwoodjs/testing/web";

import SamplePage from "./SamplePage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("SamplePage", () => {
	it("renders successfully", () => {
		expect(() => {
			render(<SamplePage />);
		}).not.toThrow();
	});
});
