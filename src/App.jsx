// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter } from "react-router-dom";
import { Grid } from "./component/grid";
import Cart from "./component/cart";
import { createGlobalStyle, styled } from "styled-components";


function App() {


  return (
    <>
      <GlobalStyle />
      <Container>
        <Grid />
        <Cart />
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
  background: hsl(26, 53.80%, 97.50%);
  font-family: "Red Hat Text", sans-serif;
  }

  main{
  // width: 60%;
  max-width: 1200px;
  margin: 0 0 20px 0
  background: hsl(130, 52.60%, 29.80%);
  }

  @media (max-width: 768px) {
     main{
      width: 90%;
    }
  }
`

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  justify-content: center;
  margin-bottom: 30px;
  // background: hsl(26, 52.60%, 29.80%);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;



export default App
