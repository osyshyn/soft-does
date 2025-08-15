"use client";

import React, { useEffect, useState } from "react";
import s from "./hub-spot-meetings.module.scss";
import { useLockScroll } from "../lenis/lenis";

interface HubSpotMeetingsProps {
  children: React.ReactNode;
}

export const HubSpotMeetings = ({ children }: HubSpotMeetingsProps) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useLockScroll(isModalOpen);

  useEffect(() => {
    const id = "hs-meetings-embed";
    if (document.getElementById(id)) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleButtonClick = () => {
    if (isScriptLoaded) {
      setIsModalOpen(true);
      createIframeManually();
    } else {
      console.log("Script not loaded");
    }
  };

  const createIframeManually = () => {
    const modal = document.createElement("div");
    modal.className = s.modal;

    const content = document.createElement("div");
    content.className = s.content;

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    closeBtn.className = s.closeBtn;

    const iframe = document.createElement("iframe");
    iframe.src =
      "https://meetings-na2.hubspot.com/andrew2/main-meet-meet?embed=true";
    iframe.className = s.iframe;

    closeBtn.onclick = () => {
      setIsModalOpen(false);
      document.body.removeChild(modal);
    };
    modal.onclick = (e) => {
      if (e.target === modal) {
        setIsModalOpen(false);
        document.body.removeChild(modal);
      }
    };

    content.appendChild(closeBtn);
    content.appendChild(iframe);
    modal.appendChild(content);
    document.body.appendChild(modal);
  };

  return (
    <button className={s.button} onClick={handleButtonClick}>
      {children}
    </button>
  );
};
