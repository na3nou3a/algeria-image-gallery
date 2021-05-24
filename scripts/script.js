function addLoadEvent(func) {
  let oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}
function insertAfter(newElement, targetElement) {
  let parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
function preparePlaceholder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("gallery")) return false;
  let placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "images/algeria/placeHolder.jpg");
  placeholder.setAttribute("alt", "my image gallery");
  let description = document.createElement("p");
  description.setAttribute("id", "description");
  let desctext = document.createTextNode("Choose an image to preview");
  description.appendChild(desctext);
  let gallery = document.getElementById("gallery");
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
}
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
      description.firstChild.nodeValue = text;
    }
  }
  return true;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareLinks);
