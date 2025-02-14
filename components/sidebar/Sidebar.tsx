"use client";

import { fetchLessons } from "@/services/getLessons";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaFilePdf, FaPlay, FaPause } from "react-icons/fa";
import Link from "next/link";

const Sidebar = ({ courseName }: any) => {
  const [lessons, setLessons] = useState<any>([]);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  const title = courseName
    .split("-")
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const router = useRouter();

  useEffect(() => {
    async function loadLessons() {
      const lessonsData = await fetchLessons(courseName);
      console.log("i am here..", lessonsData);

      setLessons(lessonsData);
    }
    loadLessons();
  }, [courseName]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLessonSelect = (lessonSlug: string) => {
    setSelectedLesson(lessonSlug);
    router.push(`/${courseName}/${lessonSlug}`);
  };

  const toggleAudio = (audioUrl: string, lessonSlug: string) => {
    const audioElement = audioRefs.current[lessonSlug];

    if (playingAudio === lessonSlug) {
      audioElement.pause();
      setPlayingAudio(null);
    } else {
      // Pause any currently playing audio
      if (playingAudio && audioRefs.current[playingAudio]) {
        audioRefs.current[playingAudio].pause();
      }

      audioElement.play();
      setPlayingAudio(lessonSlug);
    }
  };

  const openPDF = (pdfRef: string) => {
    const pdfUrl = `https://cdn.sanity.io/files/mpnj6cr9/production/${pdfRef.replace('file-', '').replace('-pdf', '.pdf')}`;
    window.open(pdfUrl, '_blank');
  };

  const getAudioUrl = (audioRef: string) => {
    return `https://cdn.sanity.io/files/mpnj6cr9/production/${audioRef.replace('file-', '').replace('-mp3', '.mp3')}`;
  };

  // Group lessons by category
  const groupedLessons = lessons.reduce((acc: any, lesson: any) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = [];
    }
    acc[lesson.category].push(lesson);
    return acc;
  }, {});

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden sticky top-0 p-1 pl-0 bg-transparent z-50">
        <button
          onClick={toggleSidebar}
          className="h-7 w-7 p-1 border bg-white flex items-center justify-center"
        >
          {isOpen ? (
            <MdKeyboardDoubleArrowLeft />
          ) : (
            <MdArrowForwardIos size={25} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform min-h-screen overflow-y-auto ${
          isOpen ? "translate-x-0 z-50" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-64 md:w-1/4 bg-[#484848] text-white p-4`}
      >
        <div className="flex items-center justify-between mb-4">
          <Link
            href={`/courses/${courseName}`}
            className="text-lg  cursor-pointer border-b-2 md:mx-auto"
            onClick={() => setSelectedLesson(null)}
          >
            {title}
          </Link>
          <MdKeyboardDoubleArrowLeft
            size={25}
            className="md:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <ul className="space-y-4">
          {Object.keys(groupedLessons).length > 0 ? (
            Object.entries(groupedLessons).map(([category, lessons]: any) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-2">{category}</h3>
                <ul className="space-y-2">
                  {lessons.map((l: any) => (
                    <li
                      key={l.slug.current}
                      className={`flex items-center justify-between cursor-pointer hover:bg-[#555555] p-2 ${
                        selectedLesson === l.slug.current
                          ? "bg-[#777777]"
                          : ""
                      }`}
                    >
                      <span 
                        onClick={() => handleLessonSelect(l.slug.current)}
                        className="flex-grow"
                      >
                        {l.title}
                      </span>
                      <div className="flex items-center space-x-2">
                        {l.audioFile && l.audioFile.asset && (
                          <>
                            <audio 
                              ref={(el) => {
                                if (el) audioRefs.current[l.slug.current] = el;
                              }}
                              src={getAudioUrl(l.audioFile.asset._ref)} 
                              onEnded={() => setPlayingAudio(null)}
                            />
                            <button 
                              onClick={() => toggleAudio(getAudioUrl(l.audioFile.asset._ref), l.slug.current)}
                              className="text-white hover:text-gray-300"
                            >
                              {playingAudio === l.slug.current ? <FaPause /> : <FaPlay />}
                            </button>
                          </>
                        )}
                        {l.pdfFile && l.pdfFile.asset && (
                          <button 
                            onClick={() => openPDF(l.pdfFile.asset._ref)}
                            className="text-white hover:text-gray-300"
                          >
                            <FaFilePdf />
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No lessons available</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
