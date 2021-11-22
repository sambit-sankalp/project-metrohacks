import React from 'react';

import styled from 'styled-components';

import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';

const img =
  'https://res.cloudinary.com/sambitsankalp/image/upload/v1637573159/metrohacks/image_5_fxgrso.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  background-image: url(${img});
`;

const SubContainer = styled.div`
  width: 526px;
  height: auto;
  background-color: #eeffff;
  border-radius: 50px;
  margin: 20px 80px;
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 50px;
  height: 2px;
  background-color: #000;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 10px;
  background-color: #8cc63e;
  color: #000000;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #69a617;
  }
  .icon {
    color: #000000;
  }
`;

const Text = styled.h3`
  font-size: 20px;
  color: #000000;
`;

const SignUp = () => {
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
        <Button type="submit">
          <Text>Sign Up As User</Text>
        </Button>
        <Line />
        <img
          style={{ marginTop: '20px' }}
          src="https://res.cloudinary.com/sambitsankalp/image/upload/v1637583188/metrohacks/image_6_halm5y.png"
          alt="tree"
        />
        <form className="form" onSubmit={submitHandler}>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username">
              Name OF Organisation
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              type="text"
              value={values.username}
              onChange={handleChange('username')}
              label="Username"
            />
          </FormControl>
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
          <Button type="submit">
            <Text>Register</Text>
          </Button>
          <Text>Already have a account? Sign In</Text>
          <Line />
          <Button style={{ marginTop: '20px' }}>
            <IconButton className="icon">
              <Google />
            </IconButton>
            <Text>Sign In With Google</Text>
          </Button>
        </form>
      </SubContainer>
    </Container>
  );
};

export default SignUp;
