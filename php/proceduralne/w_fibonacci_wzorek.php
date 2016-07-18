<html lang="pl">
<head>
    <meta charset="utf-8">
    <style>
        td {vertical-align: top}
    </style>
</head>
<body>
Zad 15 Fibonacci<br><br>
<?php

$dlaLiczby = 21;
$wyrazy = array(0,1);
// kiedy poniżej dać <=,
// oblicza jeszcze następny wyraz
for ($n = count($wyrazy); $wyrazy[$n] < $dlaLiczby; $n++){
    array_push($wyrazy, $wyrazy[$n] = $wyrazy[$n-2]+$wyrazy[$n-1]);
}
echo 'Fibonacci dla liczby '.$dlaLiczby;
var_dump($wyrazy);
?>

<table border="2"><tr>
        <?php
        //rysuje słupki znaków wg fibonacciego wyżej
        foreach ($wyrazy as $n => $v){
            $fringeStrand = str_repeat('☺<br>',$v);
            echo '<td>'.$fringeStrand.'</td>';
        }

        ?>
    </tr></table>

<br><br>
</body>
</html>
