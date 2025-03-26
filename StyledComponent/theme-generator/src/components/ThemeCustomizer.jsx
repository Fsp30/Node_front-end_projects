import { useState, useEffect } from "react";
import styled from "styled-components";
import defaultTheme from "../themes/defaultTheme";
import predefinedThemes from "../themes/predefinedthemes";

const Panel = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 320px;
  margin-top: 20px;
  text-align: center;
  background: white;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 5px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  margin: 10px 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  ${({ themeColor }) => `
    background-color: ${themeColor};
    color: white;
  `}

  &:hover {
    opacity: 0.8;
  }
`;

const ResetButton = styled(Button)`
  background-color: red;
`;

function ThemeCustomizer({ setCustomTheme }) {
  const [customColors, setCustomColors] = useState(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("customTheme");
    if (savedTheme) {
      setCustomColors(JSON.parse(savedTheme));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomColors((prev) => ({ ...prev, [name]: value }));
    setCustomTheme((prev) => ({ ...prev, [name]: value }));
  };

  const applyTheme = (theme) => {
    setCustomColors(theme);
    setCustomTheme(theme);
    localStorage.setItem("customTheme", JSON.stringify(theme));
  };

  const resetTheme = () => {
    setCustomColors(defaultTheme);
    setCustomTheme(defaultTheme);
    localStorage.removeItem("customTheme");
  };

  return (
    <Panel>
      <h2>Personalizar Tema</h2>

      <Label>Fundo:</Label>
      <Input type="color" name="background" value={customColors.background} onChange={handleChange} />

      <Label>Texto:</Label>
      <Input type="color" name="text" value={customColors.text} onChange={handleChange} />

      <Label>Primária:</Label>
      <Input type="color" name="primary" value={customColors.primary} onChange={handleChange} />

      <h3>Temas Prontos</h3>
      {Object.entries(predefinedThemes).map(([key, theme]) => (
        <Button key={key} themeColor={theme.background} onClick={() => applyTheme(theme)}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </Button>
      ))}

      <ResetButton onClick={resetTheme}>Redefinir Padrão</ResetButton>
    </Panel>
  );
}

export default ThemeCustomizer;
