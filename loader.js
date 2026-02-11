const loaderSeenKey = "icc_loader_seen";
const loader = document.querySelector(".site-loader");
const loaderVideo = loader ? loader.querySelector("video") : null;

const hideLoader = () => {
  if (!loader) {
    document.body.classList.remove("is-loading");
    return;
  }

  loader.classList.add("is-fading");

  const onFadeEnd = () => {
    loader.removeEventListener("transitionend", onFadeEnd);
    document.body.classList.remove("is-loading");
    loader.setAttribute("aria-hidden", "true");
    loader.classList.remove("is-fading");
    if (loaderVideo) loaderVideo.pause();
  };

  loader.addEventListener("transitionend", onFadeEnd);
};

if (!localStorage.getItem(loaderSeenKey) && loader && loaderVideo) {
  document.body.classList.add("is-loading");
  loader.removeAttribute("aria-hidden");

  const finalize = () => {
    hideLoader();
    localStorage.setItem(loaderSeenKey, "1");
  };

  loaderVideo.addEventListener("ended", finalize, { once: true });
  loaderVideo.addEventListener("error", finalize, { once: true });

  loaderVideo.play().catch(finalize);
} else if (loader) {
  loader.setAttribute("aria-hidden", "true");
}
