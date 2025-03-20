import React, { useState } from "react";
import "./imageCarousel.css"

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsToShow >= images.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - itemsToShow : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button carousel-button-left" onClick={prevSlide}>
                ❮
            </button>

            <div className="carousel-wrapper">
                {images.slice(currentIndex, currentIndex + itemsToShow).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Imagem ${index + 1}`}
                        className="carousel-image"
                    />
                ))}
            </div>

            <button className="carousel-button carousel-button-right" onClick={nextSlide}>
                ❯
            </button>
        </div>
    );
};

export default ImageCarousel;
