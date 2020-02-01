module.exports = () => {
  const videos = document.querySelectorAll("video");
  const audios = document.querySelectorAll("audio");
  return [...videos, ...audios].map(el => el.src);
};
