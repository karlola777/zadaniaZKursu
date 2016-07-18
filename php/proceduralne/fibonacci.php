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
//Wstęp do programowania (PHP) - Ćwiczenia.pdf

$dlaLiczby = 10;
$wyrazy = array(0,1);
// co jest nie tak z pętlą, że podaje 2 razy ostatni wyraz? :(
for ($n = count($wyrazy); $wyrazy[$n] < $dlaLiczby; $n++){
    array_push($wyrazy, $wyrazy[$n] = $wyrazy[$n-2]+$wyrazy[$n-1]);
}
echo 'Fibonacci dla liczby '.$dlaLiczby;
var_dump($wyrazy);
?>

<br><br>
</body>
</html>