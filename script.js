fetch("https://whatyearisit-backend-rose-mu.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
//
