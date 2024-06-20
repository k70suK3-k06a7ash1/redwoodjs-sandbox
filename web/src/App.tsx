import { FatalErrorBoundary, RedwoodProvider } from "@redwoodjs/web";
import { RedwoodApolloProvider } from "@redwoodjs/web/apollo";

import FatalErrorPage from "src/pages/FatalErrorPage";
import Routes from "src/Routes";
import { Toaster } from "@redwoodjs/web/toast";

import { AuthProvider, useAuth } from "./auth";

import "./scaffold.css";
import "./index.css";

const App = () => (
	<FatalErrorBoundary page={FatalErrorPage}>
		<Toaster />
		<RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
			<AuthProvider>
				<RedwoodApolloProvider useAuth={useAuth}>
					<Routes />
				</RedwoodApolloProvider>
			</AuthProvider>
		</RedwoodProvider>
	</FatalErrorBoundary>
)

export default App;
