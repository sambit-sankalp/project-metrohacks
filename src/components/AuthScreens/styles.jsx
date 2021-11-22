import styled from 'styled-components';

const img =
  'https://res.cloudinary.com/sambitsankalp/image/upload/v1637573159/metrohacks/image_5_fxgrso.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  background-image: url(${img});
`;

export const SubContainer = styled.div`
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

export const Line = styled.div`
  width: 50px;
  height: 2px;
  background-color: #000;
  margin-top: 20px;
`;

export const Button = styled.button`
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

export const Text = styled.h3`
  font-size: 20px;
  color: #000000;
  padding: 10px;
`;
