//starts the scroll indicator function when the user starts scrolling
window.addEventListener('scroll', startScrollIndicator);

//function that indicates how much of the page has been scrolled.
function startScrollIndicator() {
    
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (windowScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
   
}