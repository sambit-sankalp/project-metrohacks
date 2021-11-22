import React from 'react';
import { Link } from 'react-router-dom';

import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { Container, SubContainer, Line, Button, Text } from './styles';

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    username: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <SubContainer>
        <Link to="/org/signin" style={{ textDecoration: 'none' }}>
          <Button>
            <Text>Sign In As Organisation</Text>
          </Button>
        </Link>
        <Line />
        <img
          style={{ marginTop: '20px' }}
          src="https://res.cloudinary.com/sambitsankalp/image/upload/v1637583188/metrohacks/image_6_halm5y.png"
          alt="tree"
        />
        <form className="form" onSubmit={submitHandler}>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              label="Email"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button type="submit">
              <Text>Sign In</Text>
            </Button>
          </Link>
          <Link to="/user/signup">
            <Text>Don't have a account? Sign Up</Text>
          </Link>
          <Line />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button style={{ marginTop: '20px' }}>
              <IconButton className="icon">
                <Google />
              </IconButton>
              <Text>Sign In With Google</Text>
            </Button>
          </Link>
        </form>
      </SubContainer>
    </Container>
  );
};

export default SignIn;
