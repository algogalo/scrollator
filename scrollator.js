function scroll(t_len, len, down) {
  if (down == true) {
    factor = -1
  } else {
    factor = 1
  }
  len = len * factor
  console.log("scroll");
  window.scrollBy({
    top: len,
    left: 1,
    behavior: 'smooth'
  });
  t_len--;
  console.log(t_len);
  if (t_len < 1) {
    console.log("reached end down=" + down);
    t_len=150;
    down=false;
    console.log("reached end down=" + down);
  } else {
    console.log("scroll again");
    setTimeout(() => {
      scroll(t_len, len * factor, down);
    }, 100);
  }
}

scroll(150, 40, down = false)
