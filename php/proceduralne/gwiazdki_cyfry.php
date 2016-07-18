<html lang="pl">
<head>
    <meta charset="utf-8">
</head>
<body>
Zad 10 Gwiazdki i cyfry<br><br>
<?php
//Wstęp do programowania (PHP) - Ćwiczenia.pdf

$n = 5;
for($i = 0; $i < $n; $i++){

    for($j = 0; $j <=$i; $j++){
        echo("*");
    }
    for($k=$j + 1; $k <= $n; $k++){

        echo($k);
    }
    echo'<br>';
}
//druga połowa
for($i = $n; $i > 0; $i = $i -1){
    for($j = 0; $j <$i; $j++){
        echo("*");
    }
    for ($k=$j + 1; $k <= $n; $k++){
        echo($k);
    }
    echo '<br/>';
}

?>

</body>
</html>
