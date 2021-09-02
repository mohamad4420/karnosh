import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container  spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2.34,324,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234,243,4,4,4,44,44,4,4,4,4,4].map((value) => (
            <Grid key={Math.random() * 1000000000} item>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
