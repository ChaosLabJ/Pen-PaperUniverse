    console.log("Hello World");
    var Admin
    function getUsername() {
        var nameField = document.getElementById('nameField').value;
        var result = document.getElementById('result');
            result.textContent =  nameField;
            //alert(nameField);
            console.log(nameField);}
        var subButton = document.getElementById('subButton');
        subButton.addEventListener('click', getUsername, false); 
		
	
	

        function tausch(){
            document.getElementById("myPic").setAttribute("src", "PowiProjekt mit Daniel.png");
        }
        function wechsel(){
            document.getElementById("myPic").setAttribute("src", "PowiProjekt mit Daniel2.png");
        }

        function tausch2(){
            document.getElementById("myPic").setAttribute("src", "PowiProjekt mit Daniel4.png");
        }
        function wechsel2(){
            document.getElementById("myPic").setAttribute("src", "PowiProjekt mit Daniel5.png");
        }

        function wechsel3(){
          document.getElementById("myPic").setAttribute("src", "PowiProjekt mit Daniel6.png");
        }

        function tausch3(){
          document.getElementById("myPic").setAttribute("src", "PowiProjekt mit Daniel7.png");
        }

        function tausch4(){
          document.getElementById("myPic").setAttribute("src", "PowiProjekt mit Daniel8.png");
        }
        function wechsel5(){
          document.getElementById("myPic").setAttribute("src", "Map 1 A2 (4).png");
        }

        function tausch5(){
          document.getElementById("myPic").setAttribute("src", "Psydodragon.jpg");
        }

        function HideOrShow() {
            var x = document.getElementById("Verkäuferdaten");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          } 

          function HideOrShow2() {
            var x = document.getElementById("Verkaufsdaten");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          } 

          function MeldeNutzer() {
            var alertField = document.getElementById('MeldeFeld').value;
                console.log(alertField);

             var melde = document.getElementById("melde");
             melde.textContent = "Der Nutzer " + alertField + " wurde erfolgreich gemeldet";
             var subButton = document.getElementById('subButton');
             subButton.addEventListener('click', MeldeNutzer, false);
              }