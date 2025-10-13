document.body.style.backgroundColor = "#eee";
let theHeader = document.createElement("header");
theHeader.setAttribute("class", "website-head");
theHeader.style.cssText =
  "margin-bottom: 10px; padding: 10px; display: flex; background-color: #fff; justify-content: space-between; align-items: center;";
document.body.appendChild(theHeader);
theHeader.innerHTML = `
<div>Elzero</div>
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
`;
theHeader.firstElementChild.style.cssText =
  "font-weight: bold;color: rgb(23 177 23);";
theHeader.lastElementChild.style.cssText =
  "list-style: none;display: flex;flex-wrap: wrap;justify-content: space-evenly;align-items: center;";
for (let i = 0; i < theHeader.lastElementChild.children.length; i++) {
  theHeader.lastElementChild.children[i].style.cssText = "padding: 0px 5px";
}

let content = document.createElement("div");
document.body.appendChild(content);
content.style.cssText =
  "display: flex; justify-content: space-evenly; align-items: center; flex-wrap: wrap;";

content.setAttribute("class", "content");
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.innerHTML = `
  <div style = "font-size: 40px">${i + 1}</div>
  <div style = "font-size: 10px">Product</div>
  `;
  content.appendChild(product);
  product.style.cssText =
    "background-color: #fff; width: calc((100% - 40px) / 3); margin-bottom: 10px; padding: 20px; text-align: center;";
}

let footer = document.createElement("footer");
document.body.appendChild(footer);
footer.style.cssText =
  "background-color: rgb(23 177 23); color: #fff; padding: 10px; text-align: center; font-size: 24px;";
footer.innerText = "Copyright 2026";
// background-color: #fff;
console.log(content.lastElementChild.children[0]);
