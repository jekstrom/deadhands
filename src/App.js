import React from 'react';
import Button from '@material-ui/core/Button';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import GetApp from '@material-ui/icons/GetApp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './App.css';
import rip from "./assets/rip.png"
import lost from "./assets/lost.jpg"
import insurance from "./assets/insurance.jpg"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Deadhands
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#d7e2e3",
    padding: theme.spacing(8, 0, 6),
  },
  howDoesItWork: {
    backgroundColor: "#d7e2e3",
    padding: theme.spacing(8, 5, 6),
  },
  getTheApp: {
    backgroundColor: "white",
    padding: theme.spacing(8, 5, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },  
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary">
              Deadhands
            </Typography>
            <Typography variant="subtitle1" align="center" color="textPrimary">
              (pre release)
            </Typography>
            
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A service to distribute sensitive data to beneficiaries when you are incapacitated or indisposed. A dead man switch for your data.
              Put your mind at ease knowing that your friends and family can pick up where you left off.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="#gettheapp">
                    <GetApp/>
                    Get the app
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="#howdoesitwork">
                    How does it work?
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography id="usecases" variant="h3" align="center" color="textPrimary" gutterBottom>
            Use Cases
          </Typography>
          <Grid container spacing={4}>
            <Grid item key={0} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={rip}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Death
                  </Typography>
                  <Typography>
                    In the case of your death, you can distribute your passwords to your next of kin.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={lost}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lost
                    </Typography>
                    <Typography>
                      If you venture into the woods and get lost, you can have Deadhands notify your friends and family of important details of your trip.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={2} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={insurance}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Insurance
                    </Typography>
                    <Typography>
                      If you are a journalist with sensitive information in a hostile country, you can protect yourself from harm by having it release when you are targeted.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <div className={classes.heroContent}>
          <Container className={classes.howDoesItWork} maxWidth="md">
            <Typography id="howdoesitwork" variant="h3" align="center" color="textPrimary" gutterBottom>
              How does it work?
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A dead man switch is a device that triggers when the user stops doing something. A riding lawn mower has a dead man switch built into the seat, so if the operator falls off, the machine stops.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Deadhands is an app you install on your mobile device. As long as you signal to the service that you are still alive, by clicking a button or acknowledging a notification, your data is not distributed.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              When a sufficient time period has passed without a signal from you, then the data you have uploaded is distributed to your listed beneficiaries, or to the public.
            </Typography>

            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              How do I know my data is secure?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              When you create an account, the app generates an RSA key pair. When you upload data to our servers, it is encrypted with your private key. We do not have access to your private data in its unencrypted form.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              When you fail to notify the service that your are still alive, the service sends a push notification to your device to relinquish its private key to our servers. Once we have your private key, we can
              decrypt your data and distribute it. A final active alternative check (such as responding to an email or text message), and a configurable countdown period allow you to withold the private key 
              in the case of an error or malicious actors
            </Typography>
          </Container>
        </div>
        <div className={classes.heroContent}>
          <Container className={classes.getTheApp} maxWidth="md">
            <Typography id="gettheapp" variant="h3" align="center" color="textPrimary" gutterBottom>
              Get the app
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The app is not yet ready for download.
            </Typography>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Deadhands
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Dead man switch as a service.
        </Typography>
        <AndroidIcon/> 
        <AppleIcon/>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Album/>
    </div>
  );
}

export default App;
