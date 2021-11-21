import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<StrictMode>
			<App />
		</StrictMode>
	</MuiThemeProvider>,
	rootElement
);
