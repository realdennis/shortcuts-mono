module.exports = () => {
  // Bypass detection
  window.addEventListener(
    "visibilitychange",
    e => e.stopImmediatePropagation(),
    { capture: true }
  );

  // Still play though player collapse
  setTimeout(() => {
    // Using bookmarklet to fix shortcut reference issue
    const disableMobile = () =>
      (document.querySelector(
        "ytmusic-app-layout"
      ).playerUiService_.isMobileWeb = false);
    const payload = `javascript:(${disableMobile.toString()})()`;
    location.href = payload;
  });

  // Keep attach loop attribute
  setInterval(() => {
    const video = document.querySelector("video");
    video && video.setAttribute("loop", "loop");
  }, 250);

  completion();
};
