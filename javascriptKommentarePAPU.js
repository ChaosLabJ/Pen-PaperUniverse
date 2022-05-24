    
    var HelloWorld = 1
    console.log(HelloWorld);
    var Admin
    function getUsername() {
        var nameField = document.getElementById('nameField').value;
        var result = document.getElementById('result');
            result.textContent =  nameField;
            //alert(nameField);
            console.log(nameField);}
        var subButton = document.getElementById('subButton');
        subButton.addEventListener('click', getUsername, false); 

        function getUsername() {
            var nameField = document.getElementById('nameField').value;
            var result = document.getElementById('result');
                result.textContent =  nameField;
                //alert(nameField);
                console.log(nameField);}
            subButton.addEventListener('click', getUsername, false); 
    if(nameField="ChaosLabJ"){
        var result3 = 420;
    }
    if(nameField="Gorky"){
        var result3 = 69;
    }