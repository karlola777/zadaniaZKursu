<html lang="pl">
<head>
    <meta charset="utf-8">
</head>
<body>
Zad 9 Gwiazdki<br><br>
<?php
//Wstęp do programowania (PHP) - Ćwiczenia.pdf
$n = 5; //liczba rzędów i max gwiazdek
for($i = 0; $i < $n; $i = $i +1){
    for($j = 0; $j <=$i; $j = $j+1){
        echo("*");
    }
    echo("<br>"); //w pętli zewn dopiero po końcu rzędu
}

/*odwrócone to co u góry; odwrotnością <= jest < itd. */
for($i = 5; $i > 0; $i = $i -1){
    for($j = 0; $j <$i; $j = $j+1){
        echo("*");
    }
    echo("<br>");
}?>
<br><br>
</body>
</html>