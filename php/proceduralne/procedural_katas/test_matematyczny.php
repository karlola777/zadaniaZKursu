<?php

function mathTest($n){
    $array = array();
    $n = (int)$n;
    if (is_int($n)== true) {
        if ($n == 0) { //czy pierwsza
            $array[]=false;
        }
        else{
            $prime = true;
            for ($i = 1; $i < $n; $i++) {
                if ($n % $i == 0) {
                    $prime = false;
                }
            }
            $array[] = $prime;
        }
        if ($n % 2 == 0){ //check if even
            $array[]=true;
        }
        else $array[]=false;
        if ($n % 10 == 0){ //check if a multiple of 10
            $array[]=true;
        }
        else $array[]=false;
    }
    else echo ('Podaj liczbe calkowita');
    return $array;

}


/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 */

$testCases = [[1, [true, false, false]], [20, [false, true, true]], [74088, [false, true, false]], [9, [false, false, false]]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = mathTest($case[0])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td> {$case[0]} </td><td>[".implode($case[1], ",")."]</td><td>[".implode($results, ",")."]</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td> {$case[0]} </td><td>[".implode($case[1], ",")."]</td><td>[".implode($results, ",")."]</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>Test matematyczny</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Test matematyczny</h1>
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