fetch("https://whatyearisit-backend-beige-alpha.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
//
