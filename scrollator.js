function scroll(t_len, lim, len, up = false) {
  if (up == true) {
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
  if (t_len > 0) {
    console.log("scroll");
    setTimeout(() => {
      scroll(t_len, lim, len * factor, up);
    }, 100);
  } else {
    if (t_len > -lim) {
      up = true;
      console.log("scroll again");
      setTimeout(() => {
        scroll(t_len, lim, len * factor, up);
      }, 100);
      console.log("reached end up=" + up);
    } else {
      up = false;
      console.log("scroll again");
      setTimeout(() => {
        scroll(t_len, lim, len * factor, up);
      }, 100);
      t_len = lim;
    }
  }
}

function oscrollator(rate, step) {
  scroll(rate, rate, step)
}

oscrollator(140, 40)
