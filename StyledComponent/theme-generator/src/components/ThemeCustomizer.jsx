import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../themes/ThemeProvider";

const Panel = styled.div`
  background: ${(props) => props.bgColor || props.theme.background};
  color: ${(props) => props.textColor || props.theme.text};
  padding: 20px;
  width: 300px;
  margin-top: 20px;
  text-align: center;
  transition: 0.3s;
`;

const Input = styled.input`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-top: 10px;
  padding: 5px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const SampleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.textColor};
  margin-top: 10px;
`;

function ThemeCustomizer({ setCustomTheme }) {
  const { toggleTheme } = useContext(ThemeContext);
  const [customColors, setCustomColors] = useState({
    background: "#ffffff",
    text: "#000000",
    primary: "#6200ea",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomColors((prev) => ({ ...prev, [name]: value }));
    setCustomTheme((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Panel bgColor={customColors.background} textColor={customColors.text}>
      <h2>Personalizar Tema</h2>
      <Label>Fundo:</Label>
      <Input type="color" name="background" value={customColors.background} onChange={handleChange} />

      <Label>Texto:</Label>
      <Input type="color" name="primary" value={customColors.primary} onChange={handleChange} />

    </Panel>
  );
}

export default ThemeCustomizer;
