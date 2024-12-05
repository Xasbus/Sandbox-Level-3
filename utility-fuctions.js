function output(
    message = "Default Message",
    outputTag = "outputTag",
    shouldAppend
) {
    if (shouldAppend) window[outputTag].innerHTML += message;
    else window[outputTag].innerHTML = message;
}