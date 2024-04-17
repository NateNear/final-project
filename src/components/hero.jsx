import { useState } from 'react';
import styled from "styled-components";
import { FiArrowRight } from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ModelRowsPage from './ModelsRowPage';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #000000 0%, #000000 50%, #202020 100%);
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #57cc99, #a0d468);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadButton = styled.label`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(to right, #0891b2, #22d3ee);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(1, 225, 255, 0.5);
  &:hover {
    box-shadow: 0 0 15px rgba(1, 225, 255, 0.5);
  }
  & span {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }
  &:hover span {
    transform: rotate(360deg);
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const PreviewContainer = styled.div`
  margin: 2rem 0;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

const ShowStatsButton = styled.button`
  margin-top: 5px;
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
  &:hover {
    box-shadow: 0 0 15px rgba(76, 175, 80, 1);
  }
`;

function Hero() {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/model-rows" element={<ModelRowsPage />} />
        <Route path="/" element={
          <Section>
            <Title>Image Captioning</Title>
            <ButtonContainer>
              <UploadButton htmlFor="upload-input">
                Upload
                <span>
                  <FiArrowRight size={20} className="ml-1" />
                </span>
                <UploadInput type="file" id="upload-input" onChange={handleImageUpload} accept="image/*" />
              </UploadButton>
              {previewImage && (
                <PreviewContainer>
                  <PreviewImage src={previewImage} alt="Uploaded Preview" />
                </PreviewContainer>
              )}
              <Link to="/model-rows">
                <ShowStatsButton>Show the Stats</ShowStatsButton>
              </Link>
            </ButtonContainer>
          </Section>
        } />
      </Routes>
    </Router>
  );
}

export default Hero;