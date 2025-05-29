
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';

interface Slide {
  id: number;
  component: React.ComponentType;
  narration: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: 1,
    component: Slide1,
    narration: "Welcome to Stock Market Boot Camp! Today we're going to learn what is the stock market. The stock market is like a big marketplace where people buy and sell pieces of companies called stocks. Think of it as a giant shopping mall, but instead of buying clothes or food, people are buying and selling ownership in businesses.",
    title: 'What Is the Stock Market?'
  },
  {
    id: 2,
    component: Slide2,
    narration: "So what exactly is a stock? A stock is a small piece of ownership in a company. Imagine you and your friends want to start a lemonade stand, but you need money to buy supplies. You could sell shares of your lemonade stand to other people. Each share would give them a tiny piece of ownership in your business.",
    title: 'What Is a Stock?'
  },
  {
    id: 3,
    component: Slide3,
    narration: "Why do companies sell stock? Companies sell stock to raise money for growing their business. They might want to build new stores, hire more employees, or create better products. Instead of borrowing money from a bank, they can sell pieces of their company to investors who believe the company will be successful.",
    title: 'Why Do Companies Sell Stock?'
  },
  {
    id: 4,
    component: Slide4,
    narration: "Why would someone want to buy stock? People buy stock because they believe the company will grow and become more valuable over time. It's like planting a seed and watching it grow into a tree. If the company does well, the value of your stock goes up, and you can sell it for more money than you paid for it.",
    title: 'Why Buy Stock?'
  }
];

const LessonSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSpeechSupported('speechSynthesis' in window);
    
    return () => {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    // Stop speech when slide changes
    if (speechRef.current) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    stopSpeech();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    stopSpeech();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const playSpeech = () => {
    if (!speechSupported) return;

    stopSpeech();
    
    const utterance = new SpeechSynthesisUtterance(slides[currentSlide].narration);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeech = () => {
    if (speechSupported && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  };

  const stopSpeech = () => {
    if (speechSupported) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
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

        {/* Narration Controls */}
        <div className="mb-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {slides[currentSlide].title}
            </h3>
            <div className="flex items-center gap-2">
              {speechSupported ? (
                <>
                  <Volume2 className="w-5 h-5 text-gray-600" />
                  {!isPlaying ? (
                    <Button
                      onClick={playSpeech}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play Narration
                    </Button>
                  ) : (
                    <Button
                      onClick={pauseSpeech}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  )}
                  <Button
                    onClick={stopSpeech}
                    variant="outline"
                    size="sm"
                  >
                    Stop
                  </Button>
                </>
              ) : (
                <div className="flex items-center gap-2 text-gray-600">
                  <VolumeX className="w-4 h-4" />
                  <span className="text-sm">Speech not supported in this browser</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Narration Text */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              {slides[currentSlide].narration}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-gray-600">
          Slide {currentSlide + 1} of {slides.length}
        </div>

        {/* Information about Text-to-Speech */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">Audio Narration:</h4>
          <p className="text-green-700 text-sm">
            This slideshow now uses your browser's built-in text-to-speech feature to narrate each slide. 
            Click "Play Narration" to hear the content read aloud. The narration will automatically stop when you change slides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonSlideshow;
