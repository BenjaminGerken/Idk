//Aflevering til d. 11.12.2020
//Benjamin Rasmus Albér Gerken
//Slotshaven gymnasium 2.r

//Html lommeregner

    
<html>
    
    <head>
    
    <script>
    
    function perfomOperation(operator) {
    
    var x = parseInt(document.getElementById('txt1').value);
    
    var y = pareseInt(document.getElementById('txt2').value);
    
    var result;
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y == 0)
                resutl = "Kan ikke dividerer med 0";
            else 
            result = x / y;
            break;
            default;
            result  = 0;
            break;
            
    }
    
   
        
    document.getElementById('result').value = result;
}
    
    </script>

</head>

<body>
    
    <input type="text" id="txt1" />
    
        <button onclick="performOperation('+')"> + </button>
        <button onclick="performOpertaion('-')"> - </button>
        <button onclick="performOperation('*')"> * </button>
        <button onclick="performOperation('/')"> / </button>

    <input type="text" id="txt2" />
     
        <p> Resultat: </p>
        
    <input type="text" id="result" />
    
    
</body>

</html>
