
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, Upload } from 'lucide-react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';

interface Slide {
  id: number;
  component: React.ComponentType;
  audioFile: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: 1,
    component: Slide1,
    audioFile: '/audio/slide1.mp3', // You'll upload this file
    title: 'What Is the Stock Market?'
  },
  {
    id: 2,
    component: Slide2,
    audioFile: '/audio/slide2.mp3', // You'll upload this file
    title: 'What Is a Stock?'
  },
  {
    id: 3,
    component: Slide3,
    audioFile: '/audio/slide3.mp3', // You'll upload this file
    title: 'Why Do Companies Sell Stock?'
  },
  {
    id: 4,
    component: Slide4,
    audioFile: '/audio/slide4.mp3', // You'll upload this file
    title: 'Why Buy Stock?'
  }
];

const LessonSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
        setAudioError(false);
      };
      
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      
      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
      
      const handleError = () => {
        setAudioError(true);
        setIsPlaying(false);
      };

      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
      };
    }
  }, [currentSlide]);

  const nextSlide = () => {
    stopAudio();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    stopAudio();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const playAudio = () => {
    if (audioRef.current && !audioError) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={slides[currentSlide].audioFile}
          preload="metadata"
        />

        {/* Main Slide Card */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <CurrentSlideComponent />
          </div>
        </Card>

        {/* Audio Controls */}
        <div className="mb-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {slides[currentSlide].title}
            </h3>
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-gray-600" />
              {audioError ? (
                <div className="flex items-center gap-2 text-red-600">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Audio file not found</span>
                </div>
              ) : (
                <>
                  {!isPlaying ? (
                    <Button
                      onClick={playAudio}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  ) : (
                    <Button
                      onClick={pauseAudio}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  )}
                  <Button
                    onClick={stopAudio}
                    variant="outline"
                    size="sm"
                  >
                    Stop
                  </Button>
                </>
              )}
            </div>
          </div>
          
          {!audioError && (
            <div className="space-y-2">
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
                ></div>
              </div>
              
              {/* Time Display */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          )}
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

        {/* Instructions for Adding Audio Files */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">How to Add Your Audio Files:</h4>
          <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
            <li>Create a folder called "audio" in your project's "public" folder</li>
            <li>Add your MP3 files with these names:
              <ul className="ml-6 mt-1 list-disc list-inside">
                <li>slide1.mp3</li>
                <li>slide2.mp3</li>
                <li>slide3.mp3</li>
                <li>slide4.mp3</li>
              </ul>
            </li>
            <li>The audio will automatically load for each slide</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LessonSlideshow;
