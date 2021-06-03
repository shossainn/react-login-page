import React from 'react'
import { Grid,Paper,  TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{

    // Implementing CSS code
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0', backgroundColor:'#1bbd7e'}

    return(
        // Using Grid from material-ui
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                 
                    <h2>Sign In</h2>
                </Grid>
                {/* Text fields for user name and password */}

                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>

                {/* Addnibg check box */}

                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />

                 {/* Addming buttons */}
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>


                <Typography > Do you have an account ?

                    {/*Addming sign up link  */}
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login