import React from 'react';
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #202020 0%, #202020 50%,  #000 100%);
`;

const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(51, 51, 51, 0.8);
  border-radius: 8px;
`;

const ModelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 600px;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #333333;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: border-color 0.3s ease, transform 0.5s ease;
  cursor: pointer;

  &:hover {
    border-color: #4caf50;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
    transform: scale(1.05);
  }
`;

const ModelRowsPage = () => {
  return (
    <Section>
      <ModelContainer>
        <ModelRow>Model 1</ModelRow>
        <ModelRow>Model 2</ModelRow>
        <ModelRow>Model 3</ModelRow>
        <ModelRow>Model 4</ModelRow>
      </ModelContainer>
    </Section>
  );
};

export default ModelRowsPage;