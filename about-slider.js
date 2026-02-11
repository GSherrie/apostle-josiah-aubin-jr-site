const aboutImage = document.getElementById("aboutSlide");

if (aboutImage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const aboutImages = [
    "/slide/about1.JPEG",
    "/slide/about2.JPEG",
    "/slide/about3.JPG",
    "/slide/about4.JPG",
    "/slide/about5.JPG"
  ];

  let aboutIndex = 0;
  const displayMs = 10000;
  const fadeMs = 500;
  const blackHoldMs = 0;

  const cycle = () => {
    window.setTimeout(() => {
      aboutImage.classList.add("fade");

      window.setTimeout(() => {
        aboutIndex = (aboutIndex + 1) % aboutImages.length;
        const nextSrc = aboutImages[aboutIndex];

        const onLoad = () => {
          aboutImage.removeEventListener("load", onLoad);
          window.setTimeout(() => {
            aboutImage.classList.remove("fade");
            cycle();
          }, blackHoldMs);
        };

        aboutImage.addEventListener("load", onLoad);
        aboutImage.src = nextSrc;
      }, fadeMs);
    }, displayMs);
  };

  cycle();
}
