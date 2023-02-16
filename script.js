// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//     }, 1000);
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 2000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 3000);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {
        delayedColorChange("blue", 1000, () => {
          delayedColorChange("purple", 1000, () => {});
        });
      });
    });
  });
});
