const standardViewStyles = (theme) => ({
	lowerPaper: {
		margin: theme.spacing(1),
		color: "white",
		backgroundColor: theme.palette.primary.dark,
		overflow: "hidden",
		textAlign: "center"
	},
	previewCard: {
		margin: theme.spacing(2),
		textAlign: "center",
		color: "white",
		height: "75vh",
		backgroundColor: theme.palette.info.main,
		overflow: "hidden"
	},
	spacer: {
		margin: theme.spacing(2)
	},
	spacerMini: {
		margin: theme.spacing(0.5)
	}
});

export default standardViewStyles;
