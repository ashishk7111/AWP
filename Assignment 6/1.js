var likecounter = 1;
var commentcounter = 1;

function likehere() {
    likecounter++;

    let newElement = document.querySelector('#id2');
    newElement.innerHTML = "Like" + likecounter;
}

function commenthere() {
    let usercomment = document.querySelector('#inputid1').value;

    // creating clone 
    const newElement = document.querySelector("#refcmtid").cloneNode(true);
    newElement.removeAttribute("id");
    newElement.style.visibility = "visible";

    newElement.children[0].children[0].innerHTML = usercomment;


    //backgroundstyling
    newElement.style.background = "Skyblue";
    newElement.style.margin = "5px";
    //commentbox element
    const commentbox = document.querySelector("#commentbox");


    //element add
    commentbox.appendChild(newElement);
    //commentcounter++;
    //commentbox.insertBefore(newElement, commentbox.firstChild);
    commentcounter++;
    document.querySelector('#inputid1').value = "";
}
function deletecomments(currentelement) {
    //alert("deleted alert");
    currentelement.parentElement.parentElement.remove();
}

