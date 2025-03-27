function scrollDownAbout(){
    document.querySelector('.about').scrollIntoView({behavior:'smooth'});
  }

  function scrollDownTrending(){
    document.querySelector('.bgimg-2').scrollIntoView({behavior:'smooth'});
  }

  function scrollDownMost_Popular(){
    document.querySelector('.bgimg-3').scrollIntoView({behavior:'smooth'});
  }

  function scrollDownTop_Grossing(){
    document.querySelector('.bgimg-4').scrollIntoView({behavior:'smooth'});
  }
  function contactus(){
    document.querySelector('.contact').scrollIntoView({behavior:'smooth'});
  }

const slide=document.querySelector(".wish_list");

function show (){
    slide.style.animationName="slide_in";
}

function hide (){
    slide.style.animationName="slide_out";
}

// const delete_wished_anime=document.querySelector(".slide").querySelector(".wished_items").querySelector(".item").querySelector(".delete");
function delete_wished_anime (event){
    console.log(event);
    console.log("Target:", event.target);
    console.log("Parent:", event.target.parentElement);
    let target=event.target.parentElement;
    target.remove();
};

// const add_wished_anime=document.querySelector(".single-card").querySelector(".info").querySelector(".add");
function add_wished_anime (event) {
    const parent=event.target.parentElement;
    const title=parent.children[0].textContent;
    const img_link=parent.parentElement.children[0].children[0].children[0].src;
    console.log(img_link);
    const new_element=`
        <div class="item">
        <img src="${img_link}">
        <div class="right">
          <p> ${title} </p>
        </div>
        <button class="delete" onclick="delete_wished_anime(event)">X</button>
        </div>`;
    const wished_list=document.querySelector(".slide").querySelector(".wished_items");
    wished_list.innerHTML+=new_element;
};