function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('produkte');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}

let language = "english";

function translate()
{

    if(language != "german")
    {
        language = "german"

        document.getElementById("statusText").innerHTML = "Status der aktuellen Situation";
        document.getElementById("statusText2").innerHTML = 'Wie viele von Ihnen wahrscheinlich bemerkt haben, gibt es derzeit einen Virus namens "Covid-19".<br>Da wir auch für einen vollständigen Schutz unserer Mitarbeiter sorgen müssen, kann es zu längeren Warteschleifen in unserem Kundensupport kommen. Wir bitten Sie daher um Nachsicht.';
        document.getElementById("text").innerHTML = "Kaufen Sie Ihre Abenteuer jetzt nur bei uns (Pen and Paper Universe) oder verkaufen Sie Ihre. <br>Wir bieten Ihnen, was Ihr pen-and-paper-herz begehrt.";
        document.getElementById("myinput").placeholder = "Suche nach einem Abenteuer...";
        document.getElementById("market").innerHTML = "Unser Marktplatz";
        document.getElementById("buttomThing").innerHTML = 'Impressum</a> | Hallo | <a href=""> AGBs </a>';
        document.getElementById("translate").innerHTML = "translate to english";

    }else{
        language = "english"

        document.getElementById("statusText").innerHTML = "Status of the current situation";
        document.getElementById("statusText2").innerHTML = 'As many of you have probably noticed, there is currently a virus called "Covid-19". <br>Since we also have to ensure full protection for our employees, there may be longer waiting loops in our customer support. We therefore ask for your indulgence.';
        document.getElementById("text").innerHTML = "Buy your adventures now only from us (Pen and Paper Universe) or sell yours. <br>We offer you what your pen and paper heart desires.";
        document.getElementById("myinput").placeholder = "Look for an adventure...";
        document.getElementById("market").innerHTML = "Our marketplace";
        document.getElementById("buttomThing").innerHTML = 'Impressum</a> | Hello | <a href=""> TOS </a>';
        document.getElementById("translate").innerHTML = "übersetzen zu deutsch";
    }
}
