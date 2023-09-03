"use client";
import vid from "../../public/wordpress.mp4";

export default function VideoPlay() {
  return (
    <section className="yt-vid">
      <video
        className="wordpress w-full h-full"
        autoPlay
        controlsList="nodownload"
        muted
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
