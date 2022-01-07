import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, createTheme, ThemeProvider,Container,CssBaseline, Paper,Typography, Box, Grid } from '@mui/material';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import ParkIcon from '@mui/icons-material/Park';

const theme = createTheme();

function ClickButton(props) {
    return (
        <Button variant="contained" onClick={() => props.onClick()}>
            {props.children}
        </Button>
        );
}

function App() {
    const [rice, setRice] = useState(0);
    const [bamboo, setBamboo] = useState(0);

    const handleRiceClick = () => {
        let newRice = rice + 1;
        setRice(newRice);
    }

    const handleBambooClick = () => {
        let newBamboo = bamboo + 1;
        setBamboo(newBamboo);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ClickButton sx={{m: 1}} name="origin" onClick={handleRiceClick}>
                            <RiceBowlIcon color=''/>
                        </ClickButton>
                    </Grid>
                    <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Typography>Rice:&nbsp;{rice}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <ClickButton sx={{m: 1}} name="origin" onClick={handleBambooClick}>
                            <ParkIcon color=''/>
                        </ClickButton>
                    </Grid>
                    <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Typography>Bamboo:&nbsp;{bamboo}</Typography>
                    </Grid>
                </Grid>   
            </Container>         
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));