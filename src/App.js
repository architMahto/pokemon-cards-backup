import {
  AppBar, Button, FormControl, IconButton, Input, InputAdornment,
  InputLabel, LinearProgress, OutlinedInput, Toolbar, Typography
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pokemon Cards Backup
          </Typography>
        </Toolbar>
      </AppBar>
      <LinearProgress />
      <div className="App">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          startIcon={<CloudUploadIcon />}
        >
          Backup
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          size="large"
          startIcon={<DeleteIcon />}
        >
          Purge
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          size="large"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
        <FormControl fullWidth className={classes.margin}>
          <OutlinedInput
            id="standard-adornment-amount"
            value={''}
            onChange={() => {}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {}}
                  onMouseDown={() => {}}
                >
                  {<SearchIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
}

export default App;
