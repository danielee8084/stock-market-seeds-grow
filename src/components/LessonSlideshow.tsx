
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2 } from 'lucide-react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';

interface Slide {
  id: number;
  component: React.ComponentType;
  voiceOverText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    component: Slide1,
    voiceOverText: "Hi there, and welcome to Stock Market Boot Camp! I'm your instructor, Ms. Pine. In this first lesson, we'll discover what the stock market actually is—and why people all over the world buy and sell stocks every single day. Let's dive in!"
  },
  {
    id: 2,
    component: Slide2,
    voiceOverText: "So, what is a stock? Simply put, a stock is a tiny piece of ownership in a company. Imagine your favorite lemonade stand growing into a big franchise—each share of stock is like one small slice of that pie."
  },
  {
    id: 3,
    component: Slide3,
    voiceOverText: "Why do companies sell stock? They need money to grow—whether that's opening new stores, hiring amazing teams, or inventing cool new products. Selling shares gives them the cash they need to make those dreams happen."
  },
  {
    id: 4,
    component: Slide4,
    voiceOverText: "And why do people buy stock? Because they believe the company will get bigger and stronger over time—and that small slice they own today could be worth a lot more tomorrow. It's like planting a seed and watching it grow!"
  }
];

const LessonSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const playVoiceOver = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(slides[currentSlide].voiceOverText);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  const stopVoiceOver = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Stock Market Boot Camp
          </h1>
          <p className="text-xl text-gray-600">Lesson 1: Understanding the Stock Market</p>
        </div>

        {/* Main Slide Card */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <CurrentSlideComponent />
          </div>
        </Card>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-purple-500 hover:bg-purple-600 text-white"
              size="lg"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="bg-purple-500 hover:bg-purple-600 text-white"
              size="lg"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Voice Over Controls */}
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-gray-600" />
            {!isPlaying ? (
              <Button
                onClick={playVoiceOver}
                className="bg-green-500 hover:bg-green-600 text-white"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Voice-Over
              </Button>
            ) : (
              <Button
                onClick={stopVoiceOver}
                className="bg-red-500 hover:bg-red-600 text-white"
                size="lg"
              >
                <Pause className="w-5 h-5 mr-2" />
                Stop Voice-Over
              </Button>
            )}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-gray-600">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
};

export default LessonSlideshow;
