<html lang="pl">
<head>
    <meta charset="utf-8">
    <style>
        td {vertical-align: top}
    </style>
</head>
<body>
<?php
//kod jak w liście zadań z bulletami
$fibAllInput = array();
$cookieName = 'fibonacci';

if (isset($_COOKIE[$cookieName])) {
    $fibAllInput = json_decode($_COOKIE[$cookieName], true);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // jak przesłać w 1 ciasteczku dane z 2 pól formularza
    // żeby nie były 1-wym. tablicą do cięcia, tylko kluczem => wartością?
    if (isset($_POST['fib'])) {
        $fib = $_POST['fib'];
        $fibNum = trim($fib['num']);
        $fibChar = trim($fib['char']);

        if (!empty($taskName)) {
            $fibAllInput[] = $fib;

            setcookie($cookieName, json_encode($fibAllInput));
        }
    }
}

?>
<form action="" method="post">
    <input type="number" name="fib[num]" placeholder="liczba" />
    <input type="text" name="fib[char]" placeholder="1 znak" />
    <input type="submit">
</form>

<?php
//kod jak w pliku "fibonacci" - wzór dalej zwraca 2 razy ostatni wyraz, lol
$sequence = array(0,1);
for ($n = count($sequence); $sequence[$n] < $fibNum; $n++){
array_push($sequence, $sequence[$n] = $sequence[$n-2]+$sequence[$n-1]);
}
echo 'Fibonacci dla liczby '.$fibNum;
var_dump($sequence);
?>

<?php if (count($fibAllInput)): ?>
    <p>Wzorek z ciągu dla liczby <?php echo $fibNum; ?></p>
    <table border="2"> <!-- herezja html żeby widzieć, czy coś się wyświetla :( -->
        <tr>
            <?php foreach ($fibAllInput as $fibNum => $fibChar): {
                $fringeStrand = str_repeat($fibChar.'<br>',$fibNum); //pojedynczy słupek ze znaku
                echo '<td>'.$fringeStrand.'</td>';
            }
            endforeach; ?>
        </tr>
    </table>
<?php else: ?>
    <p>Brak danych do wzoru</p>
<?php endif; ?>
</body>
</html>