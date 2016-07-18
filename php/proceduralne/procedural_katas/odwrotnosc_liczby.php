<?php
/*
 * Napisz funkcje która będzie pobierać zmienną liczbową (całkowitą) a zwracać tablicę cyfr z których ta liczba się składa w odwrotnej kolejności
 *
 * Przykład:
 * revertNumber(1234) => [4,3,2,1]
 * revertNumber(1133112) => [2,1,1,3,3,1,1]
 */
function revertNumber($n){
    $n = (string)$n;
    $n = str_split($n, 1);
    $n = array_reverse($n, false);
    foreach ($n as &$number){
        $number = (int)$number;
    }
    return $n;
}


/*
 * Kod poniżej służy wygenerowaniu testów i strony poglądowej - nie modyfikujcie go!
 */

$testCases = [[1, [1]], [21, [1,2]], [74088, [8,8,0,4,7]], [5473241, [1,4,2,3,7,4,5]]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = revertNumber($case[0])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td> {$case[0]} </td><td>[".implode($case[1], ",")."]</td><td>[".implode($funcValue, ",")."]</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td> {$case[0]} </td><td>[".implode($case[1], ",")."]</td><td>[".implode($funcValue, ",")."]</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>Odwrotność liczby</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Odwrotność liczby</h1>
        <p><a class='btn btn-lg btn-success' href='javascript:window.location.reload();' role='button'>Odśwież</a></p>
      </div>

      <div class='row'>
          <h1>Testy:</h1>
          <table class='table'>
            <thead>
              <tr>
                <th>Stan testu:</th>
                <th>Dane:</th>
                <th>Wartość spodziewana:</th>
                <th>Wartość otrzymana:</th>
              </tr>
            </thead>
            <tbody>
                $results
            </tbody>
          </table>
      </div>
    </div>
  </body>
</html>
");