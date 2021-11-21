import Sketchy from "./Sketch";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import standardViewStyles from "./assets/jss/standardViewStyles";

const useStyles = makeStyles(standardViewStyles);

export default function App() {
	const classes = useStyles();
	return (
		<Paper className={classes.lowerPaper}>
			<Paper className={classes.previewCard}>
				<Sketchy />
			</Paper>
			<Typography>Neighbors</Typography>
		</Paper>
	);
}
