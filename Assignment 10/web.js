let likeMe = function (btnElement) {
    let likecounterstr=btnElement.children[0].innerHTML;
    let likecounter=parseInt(likecounterstr);
    likecounter++;
    btnElement.children[0].innerHTML=likecounter;
  };
  
  let commentHere = function (btnElementComment) {
    const commentBox =
      btnElementComment.parentElement.parentElement.parentElement.children[2];
  
    let newElement = commentBox.children[0].cloneNode(true);
  
    // lets access the input box
    const inputElem =
      btnElementComment.parentElement.parentElement.children[1].children[0];
  
    newElement.children[0].innerHTML = inputElem.value;
  
    // clear the input
    inputElem.value = "";
  
    // add the new element to comment box
    commentBox.insertBefore(newElement, commentBox.firstChild);
  };
  
  let deleteComment = function (btnElementDel) {
  
    btnElementDel.parentElement.parentElement.remove();
  };