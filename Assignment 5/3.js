var commentcounter = 1;
var likecounter = 1;

function commentbutton() {
    //create new element
    const newelement = document.createElement("div");
    newelement.textContent = "User Comment" + commentcounter;

    //stylin to new element
    newelement.style.background = "blue";
    newelement.style.color = "white";
    newelement.style.marginTop = "5px";
    //Comment box Element
    const commentBox = document.querySelector('#commentBox');
    //append the new element to parent
    commentBox.appendChild(newelement);

    commentcounter++;
}

function likebutton() {
    likecounter++;

    let btnelement = document.querySelector('#btnid');

    btnelement.innerHTML = "Like" + likecounter;

}
