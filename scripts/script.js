window.onload = prepareLinks;
function prepareLinks() {
  if (!document.getElementsByTagName || !document.getElementById) {
    return false;
  }
  if (!document.getElementById("gallery")) {
    return false;
  }
  let gallery = document.getElementById("gallery");
  let links = gallery.getElementsByTagName("a");
  let l = links.length;
  for (let i = 0; i < l; i++) {
    links[i].onclick = function () {
      return showPic(this) ? false : true;
    };
  }
}
function showPic(elem) {
  let source, placeholder, text, description;
  if (!document.getElementById("placeholder")) {
    return false;
  }
  source = elem.getAttribute("href");
  placeholder = document.getElementById("placeholder");
  if (placeholder.nodeName != "IMG") {
    return false;
  }
  placeholder.setAttribute("src", source);
  if (document.getElementById("description")) {
    text = elem.getAttribute("title") ? elem.getAttribute("title") : "";
    description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
      //text node
      description.firstChild.nodeValue = text;
    }
  }
  return true;
}
