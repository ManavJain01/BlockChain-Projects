import object from './objects.js'

const myProjects = document.getElementById('my-projects')

for (let i = 1; i < Object.keys(object).length+1; i++) { 
  let div = document.createElement('div');
  let para = document.createElement("p");
  let span = document.createElement("span");
  let alink = document.createElement("a");

  para.append(object[i].p);
  para.className = "heading2";

  span.append(object[i].sp);
  span.className = "heading2";

  alink.href = object[i].link;
  alink.target = '_blank';
  alink.classList.add("objectLinks");

  div.classList.add('div1');

  div.appendChild(para);
  div.appendChild(span);

  myProjects.appendChild(alink);
  alink.appendChild(div);
}