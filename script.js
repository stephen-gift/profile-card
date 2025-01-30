document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loadingOverlay").style.display = "none";
    document.getElementById("content").style.display = "flex";
  }, 2000);

  const card = document.querySelector(".profile-card");

  card.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const isTopLeft = x < width * 0.3 && y < height * 0.3;
    const isTopRight = x > width * 0.7 && y < height * 0.3;
    const isBottomLeft = x < width * 0.3 && y > height * 0.7;
    const isBottomRight = x > width * 0.7 && y > height * 0.7;

    let rotateX = 0;
    let rotateY = 0;

    if (isTopLeft) {
      rotateX = 7;
      rotateY = -7;
    } else if (isTopRight) {
      rotateX = 7;
      rotateY = 7;
    } else if (isBottomLeft) {
      rotateX = -7;
      rotateY = -7;
    } else if (isBottomRight) {
      rotateX = -7;
      rotateY = 7;
    }

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });

  function updateUTCTime() {
    const currentTimeElement = document.querySelector(
      '[data-testid="currentTimeUTC"]'
    );
    const now = new Date();
    const utcTime = now.toUTCString();
    currentTimeElement.textContent = `Current UTC Time: ${utcTime}`;
    currentTimeElement.style.animation = "fadeIn 1s ease-in-out";
  }

  updateUTCTime();
  setInterval(updateUTCTime, 1000);
});
