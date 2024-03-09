const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className="background-video">
      <source src="/src/assets/backgroundvideo.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;