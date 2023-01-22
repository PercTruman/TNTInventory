import  React, {useState, useContext} from 'react';
import { UserContext } from '../Components/UserContext';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				Shawn Hart
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
	const { login } = useContext(UserContext);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

    const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
        fetch('/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					login(user);
					navigate('/-orders');
				});
			} else {
				res.json().then((errors) => {
					alert(errors.error);
				});
			}
		});
	};
	

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='750px'>
				<img src='../Assets/TNTLogo.svg' alt='TNT logo' />
				<CssBaseline />

				<Box
					sx={{
						marginTop: '60%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h2'>
						Sign in
					</Typography>
					<Box
						width={'800px'}
						component='form'
						justifyContent={'space-evenly'}
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 6 }}
					>
						<TextField
							margin='normal'
							required
							sx={{ height: '100px' }}
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
                            onChange={handleChange}

						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
                            onChange={handleChange}

						/>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 6, mb: 6 }}
                            onClick={handleSubmit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='./-signup' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}
