document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  for (let h = 0; h < 12; h++) {
    const majorGroup = document.createElement("div");
    for (let i = 0; i < 12; i++) {
      const minorGroup = document.createElement("div");
      // for (let j = 0; j < 12; j++) {
      //   const circle = document.createElement("div");
      //   minorGroup.appendChild(circle);
      // }
      majorGroup.appendChild(minorGroup);
    }
    container.appendChild(majorGroup);
  }
});
