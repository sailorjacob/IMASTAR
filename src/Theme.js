import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"*, *::before, *::after": {
					boxSizing: "border-box"
				},
				body: {
					fontFamily: "unset",
					fontSize: "unset",
					fontWeight: "unset"
				}
			}
		},
		MuiSpeedDialAction: {
			staticTooltipLabel: {}
		}
	},
	palette: {
		type: "dark",
		primary: {
			main: "#5c7156",
			light: "#87A485",
			dark: "#242929",
			contrastText: "#fff"
		},
		secondary: {
			main: "#9385a4",
			light: "#bab1c5",
			dark: "#6d5e7e",
			contrastText: "#000000"
		},
		info: {
			main: "#3d3d3d",
			light: "#d6d6d6",
			dark: "#1f1f1f"
		},
		error: {
			main: "#FFFFFF"
		}
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: "Source Code Pro, sans-serif",
		fontSize: 14,
		fontWeightRegular: 400,
		fontWeightBold: 700
	},
	button: {
		textTransform: "none",
		outline: "none"
	},
	default_button: {
		display: "flex",
		alignItems: "center",
		border: "none",
		padding: "7px 15px 6px",
		boxShadow:
			"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
		borderRadius: 4,
		fontWeight: 600,
		fontSize: "1em",
		cursor: "pointer",
		outline: "none",
		transition: "all .3s ease",
		maxWidth: "100%",
		opacity: 1,
		lineHeight: 1,
		"&:hover": {
			opacity: 0.65
		}
	}
});

export default theme;
