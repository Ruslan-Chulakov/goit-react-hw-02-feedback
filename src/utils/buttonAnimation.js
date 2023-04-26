const buttonAnimation = evt => {
  let rect = evt.target.getBoundingClientRect();
  let x = (evt.clientX / 3 - rect.left).toFixed(0);
  evt.currentTarget.style.setProperty('--x', x + 'deg');
};

export default buttonAnimation;
