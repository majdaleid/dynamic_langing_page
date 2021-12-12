const performance_begin = performance.now();
/*set the default selected navbar item ,change the first class*/

let section1 = document.getElementById("section1");
section1.setAttribute("class", "active");

/*adding 2 other sections section 5 and section 6  and the navigation bar will be generated autamtically*/

let section4 = document.getElementById("section4");

section4.insertAdjacentHTML("afterend", "<section id='section5' data-nav='Section 5'><div class='landing__container'><h2>Section 5</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>");
let section5 = document.getElementById("section5");

section5.insertAdjacentHTML("afterend", "<section id='section6' data-nav='Section 6'><div class='landing__container'><h2>Section 6</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>");

/*end of section 5 and 6*/

////////*add navigation bar*////////////
/*get sections names */
let sections = document.getElementsByTagName("section");
/*convert nodeList to array*/
let arrayOfsections = [];
let arrayofidsofsections = []
Array.prototype.forEach.call(sections, section => {


  /*text come from data-nav*/
  let sectionattribute = section.getAttribute("data-nav");

  /*href come from the id of the section*/
  let sectionattributeid = section.getAttribute("id");

  //console.log(sectionattribute);
  arrayOfsections.push(sectionattribute);

  /*HREF VALUE IS SECTION1,SECTION2,SECTION3*/
  arrayofidsofsections.push(sectionattributeid);

})


/*create navigation bar*/

const navbarlist = document.getElementById("navbar__list");
for (const [i, link] of arrayOfsections.entries()) {

  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", "#" + arrayofidsofsections[i]);
  let linktext = document.createTextNode(arrayOfsections[i]);
  li.appendChild(a);
  a.appendChild(linktext);
  li.setAttribute("id", "navbar__list");
  navbarlist.appendChild(li);
}


/*add active class to the current section*/
/*change the a background while scrolling too*/
/*change the color of the current nav item */
let section = document.querySelectorAll('section')
console.log(`all sections ${section}`)
let a_scroll = document.querySelectorAll("#navbar__list a");
console.log(`all navbar_list a  also a_scroll = ${a_scroll}`)

window.onscroll = (() => {
  section.forEach(function (v) {
    let rect = v.getBoundingClientRect();


    const idsectionappear = v.getAttribute("id");

    const idsectionappear2 = idsectionappear.slice(-1);

    const idsectionappear2number = parseInt(idsectionappear2);

    let y = rect.y + 20;
    if (rect.top <= 150 && rect.bottom >= 150) {
      /*if( rect.top >= 0 && rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)){*/
      //   if(y >0 && y <= (window.innerHeight ||  document.documentElement.clientHeight)){
      a_scroll[idsectionappear2number - 1].style.color = "red";
      v.classList.add("active");
    } else {
      a_scroll[idsectionappear2number - 1].style.color = "#fff";
      v.classList.remove("active");
      a_scroll[idsectionappear2number - 1].style.color = "#fff";
    }


  })
})






/*  Add the functionality to scroll to sections */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'

    });
  });
});


const performance_end = performance.now();

console.log(`this code took ${performance_end}-${performance_begin} in milliseconds`);