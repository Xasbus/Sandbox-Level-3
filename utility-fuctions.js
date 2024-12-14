function output(message = "", outputTag = "outputTag", shouldAppend = true) {
  if (shouldAppend) window[outputTag].innerHTML += message;
  else window[outputTag].innerHTML = message;
}

// export function outputModule(
//   message = "",
//   outputTag = "outputTag",
//   shouldAppend = true
// ) {
//   if (shouldAppend) window[outputTag].innerHTML += message;
//   else window[outputTag].innerHTML = message;
// }
