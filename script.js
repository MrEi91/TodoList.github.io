var body         = document.body;
var divContainer = document.getElementsByClassName("container");

var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id","main");
    divContainer[0].appendChild(mainDiv);

var tagP  = document.createElement('p');
    mainDiv.appendChild(tagP);

var tagLabel      = document.createElement("label");
var tagLabelText  = document.createTextNode("Add Item");
    tagLabel.setAttribute("for","new-task");
    tagP.appendChild(tagLabel);
    tagLabel.appendChild(tagLabelText);

var tagInput      = document.createElement("input");
    tagInput.type = "text";
    tagInput.setAttribute("id","new-task");
    tagP.appendChild(tagInput);

var tagButton     = document.createElement("button");
var tagButtonText = document.createTextNode("Add");
    tagP.appendChild(tagButton);
    tagButton.appendChild(tagButtonText);

var tagH3     = document.createElement("h3");
var tagH3Text = document.createTextNode("To-do");
    tagH3.appendChild(tagH3Text);
    mainDiv.appendChild(tagH3);

var tagUl = document.createElement("ul");
    tagUl.setAttribute("id","incomplete-tasks");
    mainDiv.appendChild(tagUl);

var arrLabel        = ['Week 1','Week 2', 'Week 3','Week 4','Week 5' ,'Week 6'];
var arrButtonEdit   = ['Edit','Edit','Edit','Edit','Edit','Edit'];
var arrButtonDelete = ['Delete','Delete','Delete','Delete','Delete','Delete']

for(let i = 0; i < arrLabel.length; i++){

  var tagLi = document.createElement("li");
      tagUl.appendChild(tagLi);

  var tagInputLi  = document.createElement("input");
      tagInputLi.setAttribute("type","checkbox");
      tagLi.appendChild(tagInputLi);

  var tagLabelLi    = document.createElement("label");
  var tagLabelLiTxt = document.createTextNode(arrLabel[i]);
      tagLabelLi.appendChild(tagLabelLiTxt);
      tagLi.appendChild(tagLabelLi);

  var tagInputLi2   = document.createElement("input");
      tagInputLi2.setAttribute("type","text");
      tagLi.appendChild(tagInputLi2);

  var buttonEdit    = document.createElement("button");
  var buttonEditTxt = document.createTextNode(arrButtonEdit[i]);
      buttonEdit.setAttribute("class","edit");
      buttonEdit.appendChild(buttonEditTxt);
      tagLi.appendChild(buttonEdit);

  var buttonDelete    = document.createElement("button");
  var buttonDeleteTxt = document.createTextNode(arrButtonDelete[i]);
      buttonDelete.setAttribute("class","delete");
      buttonDelete.appendChild(buttonDeleteTxt);
      tagLi.appendChild(buttonDelete);
}

var tagH3     = document.createElement("h3");
var tagH3Text = document.createTextNode("Completed");
    tagH3.appendChild(tagH3Text);
    mainDiv.appendChild(tagH3);

var tagUl = document.createElement("ul");
    tagUl.setAttribute("id","completed-tasks");
    mainDiv.appendChild(tagUl);

var tagLi = document.createElement("li");
    tagUl.appendChild(tagLi);

var tagInputLi  = document.createElement("input");
    tagInputLi.setAttribute("type","checkbox");
    tagInputLi.setAttribute("id","checklist")
    tagLi.appendChild(tagInputLi);

var getIdCheckbox = document.getElementById("checklist").checked = true;

var tagLabelLi    = document.createElement("label");
var tagLabelLiTxt = document.createTextNode("Hacktiv8 - Phase 0");
    tagLabelLi.appendChild(tagLabelLiTxt);
    tagLi.appendChild(tagLabelLi);

var tagInputLi2   = document.createElement("input");
    tagInputLi2.setAttribute("type","text");
    tagLi.appendChild(tagInputLi2);

var buttonEdit    = document.createElement("button");
var buttonEditTxt = document.createTextNode("Edit");
    buttonEdit.setAttribute("class","edit");
    buttonEdit.appendChild(buttonEditTxt);
    tagLi.appendChild(buttonEdit);

var buttonDelete    = document.createElement("button");
var buttonDeleteTxt = document.createTextNode("Delete");
    buttonDelete.setAttribute("class","delete");
    buttonDelete.appendChild(buttonDeleteTxt);
    tagLi.appendChild(buttonDelete);

