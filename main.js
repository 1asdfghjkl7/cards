document.querySelector('#createBtn').addEventListener("click", ()=>{

    const backgroundClr = () => {
        event.target.parentNode.style.backgroundColor = event.target.value;
        event.target.parentNode.lastChild.style.backgroundColor = event.target.value;
    }

    const fontClr = () => {
        event.target.parentNode.style.color = event.target.value
    }

    const del = () => {
        event.target.parentNode.remove();
    }

    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "155px";

    const backClrBtn = ()=>{
        const backColorBtn = document.createElement("input")
        backColorBtn.className = "backgroundColorButton";
        backColorBtn.type = "color";
        backColorBtn.name = "backcolor";
        backColorBtn.addEventListener("change", backgroundClr)
        return backColorBtn
    }

    const fontClrBtn = ()=>{
        const fontBtn = document.createElement("input")
        fontBtn.className = "fonty"
        fontBtn.type = "color"
        fontBtn.name = "fontColorButton"
        fontBtn.addEventListener("change", fontClr)
        return fontBtn
    }

    const delBtn = ()=>{
        const delButton = document.createElement("button")
        delButton.className = "delete";
        delButton.textContent = "Delete";
        delButton.addEventListener("click", del)
        return delButton;
    }


    
    const textDiv = ()=>{
        const cardText = document.createElement("div");
        cardText.textContent = document.getElementById("userText").value;
        cardText.style.width = "155px";
        return cardText
    }

    

    const wrapper = document.getElementById("wrapper");
    wrapper.appendChild(card);
    card.appendChild(backClrBtn());
    card.appendChild(fontClrBtn());
    card.appendChild(delBtn());
    card.appendChild(textDiv());
    
  


})