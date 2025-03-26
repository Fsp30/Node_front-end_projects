import { useContext, useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./themes/ThemeProvider";
import ThemeCustomizer from "./components/ThemeCustomizer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.bgColor || props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: Arial, sans-serif;
    transition: 0.3s;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.textColor || props.theme.primary};
  transition: 0.3s;
`;

function App() {
  const { toggleTheme } = useContext(ThemeContext);
  const [customTheme, setCustomTheme] = useState({
    background: "#121212",
    text: "#ffffff",
    primary: "#bb86fc"
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("customTheme");
    if (savedTheme) {
      setCustomTheme(JSON.parse(savedTheme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("customTheme", JSON.stringify(customTheme))
  }, [customTheme])

  return (
    <>
      <GlobalStyle bgColor={customTheme.background} />
      <Container>
        <Title textColor={customTheme.primary}>Gerador de Temas</Title>
        <ThemeCustomizer setCustomTheme={setCustomTheme} />
      </Container>
    </>
  );
}

export default App;
