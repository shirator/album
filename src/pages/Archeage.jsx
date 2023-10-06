import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease; /* Adicione uma transição suave para o deslizamento */
`;

const Slide = styled.div`
  flex: 0 0 100%;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const NextButton = styled(ArrowButton)`
  right: 0;
`;

const PrevButton = styled(ArrowButton)`
  left: 0;
`;

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para voltar para a imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // UseEffect para avançar automaticamente as imagens a cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Avança a cada 5 segundos

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  return (
    <SliderContainer>
      <SlideWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Slide>
        ))}
      </SlideWrapper>
      <PrevButton onClick={prevSlide}>{"<"}</PrevButton>
      <NextButton onClick={nextSlide}>{">"}</NextButton>
    </SliderContainer>
  );
};

const imageUrls = [
  "https://i.imgur.com/qEspLN0.png",
  "https://i.imgur.com/yQk8IgD.png",
  "https://i.imgur.com/XmdwQq5.png",
  "https://i.imgur.com/9oZtJf0.png",
  "https://i.imgur.com/iAzz97J.png",
  "https://i.imgur.com/69lS2D4.png",
  "https://i.imgur.com/Pox9Ila.png",
  // Adicione mais URLs de imagens conforme necessário
];

function App() {
  return (
    <div>
      <Slider images={imageUrls} />
    </div>
  );
}

export default App;
