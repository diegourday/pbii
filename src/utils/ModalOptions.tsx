export const onOpen = () => {
  document.body.style.overflow = "hidden";
  window.innerWidth > 768 && (document.body.style.paddingRight = "7px");
};

export const onClose = () => {
  document.body.style.overflow = "auto";
  document.body.style.paddingRight = "0px";
};
