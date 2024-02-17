import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import PageRouter from "./routes/PageRouter";
import WebFontLoader from "webfontloader";
function App() {
	WebFontLoader.load({ google: { families: ["Montserrat", "Poppins"] } });
	const theme = createTheme({
		fontFamily: "Poppins",
		breakpoints: {
			xxs: "10em",
			xs: "36em",
			sm: "48em",
			md: "64em",
			lg: "74em",
			xl: "90em",
		},
	});
	return (
		<MantineProvider theme={theme}>
			<PageRouter />
		</MantineProvider>
	);
}

export default App;
