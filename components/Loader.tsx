"use client";

import { useState, useEffect } from "react";

interface LoaderProps {
  finishLoading: () => void;
  isDark?: boolean;
}

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(25.000000, 35.000000)">
        <path
          className="logo-text"
          d="M 15.565 0 L 19.359 0 L 19.359 5.373 L 23.502 5.373 L 23.502 8.306 L 19.359 8.306 L 19.359 22.066 A 3.073 3.073 0 0 0 19.913 24.066 A 2.332 2.332 0 0 0 21.8 24.732 A 9.185 9.185 0 0 0 23.604 24.486 L 23.604 27.563 A 10.999 10.999 0 0 1 20.692 27.973 A 4.725 4.725 0 0 1 16.857 26.435 Q 15.565 24.896 15.565 22.066 L 15.565 8.306 L 11.525 8.306 L 11.525 5.373 L 15.565 5.373 L 15.565 0 Z M 10.726 5.25 L 10.726 8.777 A 11.369 11.369 0 0 0 8.859 8.634 Q 5.127 8.634 3.794 11.813 L 3.794 27.563 L 0 27.563 L 0 5.373 L 3.691 5.373 L 3.753 7.937 Q 5.619 4.963 9.044 4.963 Q 10.151 4.963 10.726 5.25 Z M 28.014 25.573 Q 28.014 24.589 28.598 23.933 A 2.227 2.227 0 0 1 30.352 23.276 A 2.294 2.294 0 0 1 32.125 23.933 A 2.328 2.328 0 0 1 32.73 25.573 A 2.202 2.202 0 0 1 32.125 27.152 Q 31.521 27.788 30.352 27.788 Q 29.183 27.788 28.598 27.152 Q 28.014 26.517 28.014 25.573 Z"
          fill="currentColor"
        />
      </g>
      <path
        className="logo-circle"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="
          M 45, 45
          m -42, 0
          a 42,42 0 1,0 84,0
          a 42,42 0 1,0 -84,0
        "
      />
    </g>
  </svg>
);

export default function Loader({ finishLoading, isDark = true }: LoaderProps) {
  const [fadeOut, setFadeOut] = useState(false);

  // Colors based on theme
  // Dark: cyan logo on dark background
  // Light: blue logo on warm stone background (easy on eyes, matches Linear/Notion style)
  const bgColor = isDark ? "#1f1f1f" : "#fafaf9";
  const logoColor = isDark ? "#00B0FF" : "#2563eb";
  const circleColor = isDark ? "#00B0FF" : "#a8a29e";

  useEffect(() => {
    // After animation completes (3s), trigger fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2800);

    // After fade out (0.3s more), finish loading
    const finishTimer = setTimeout(() => {
      finishLoading();
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [finishLoading]);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-logo">
        <IconLoader />
      </div>

      <style jsx global>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${bgColor};
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: 9999;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          overflow: hidden;
        }

        .loader-container::before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background-color: ${bgColor};
          z-index: -1;
        }

        .loader-container.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .loader-logo {
          width: 100px;
          max-width: 100px;
          color: ${logoColor};
        }

        .loader-logo svg {
          width: 100%;
          height: 100%;
          display: block;
          margin: 0 auto;
          fill: none;
        }

        .logo-circle {
          stroke: ${circleColor};
          stroke-dasharray: 265;
          stroke-dashoffset: 265;
          animation: drawCircle 1.5s ease-in-out forwards;
        }

        .logo-text {
          opacity: 0;
          animation: fadeInText 0.7s ease-in-out 1.5s forwards;
        }

        #logo {
          animation: scaleOut 0.3s ease-in-out 2.5s forwards;
        }

        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInText {
          to {
            opacity: 1;
          }
        }

        @keyframes scaleOut {
          to {
            transform: scale(0.1);
            opacity: 0;
          }
        }

        body.loading {
          overflow: hidden !important;
        }
      `}</style>
    </div>
  );
}
