function briefView(targetindex, people){
    let target = document.getElementById(targetindex);

    let list = "<ul>";
    for(i=0; i<people.length; i++){
        list += "<li>" + people[i].name +"</li>";
    }
    list += "</ul>";

    target.innerHTML = list;
}


function detailView(targetindex, people){

    const template = Handlebars.compile(`
    {{#each people}}
    <d1>
    <dt> {{name}}</dt>
    <img width=100 src={{avatar}}>
    <dd>Age:{{age}}</dd>
    <dd>Eye Colour:{{eyeColour}}</dd>
    <dd>favourite Fruit:{{favouriteFruit}}</dd>
    </d1>
    {{/each}} 
    `);

    let target = document.getElementById('people');
    target.innerHTML = template({people: people});

    let list = "";
    list += "<ul>"
    for(i=0; i<people.length; i++){
        list += template(data[i]);
    }
    list += "</ul>";

    target.innerHTML = list;
}

let currentView = briefView;
function switchViews(){
    if(currentView==briefView){
        currentView==detailView
    } else {
        currentView=briefView;
    }
    currentView("people", people);
}


window.onload = function(){
    currentView("people", people);
    document.getElementById("switch").onclick=switchViews;
    console.log()
    
}