<?php
/*
 * Napisz funkcję która pobiera napis, dzieli go na poszczególne słowa i zwraca tablice z tymi słowami rozszerzonymi o ich długość (pamiętaj oddzielić słowo i jego długość spacją).
 *
 * Przykłady:
 * wordLength("Ala ma kota") => ["Ala 3", "ma 2", "kota 4"]
 * wordLength("Dlugosc slow ma znaczenie") => ["Dlugosc 7", "slow 4", "ma 2", "znaczenie 9"]
 * wordLength("") => []
 */

function wordLength($string){
    if ($string === '') {
        $counted = array();
    }
    else {
        $words = explode(" ", $string);
        $counted = array ();
        foreach ($words as $w){
            $length = strlen($w);
            $length = (string)$length;
            $counted[] = $w." ".$length;
        }
    }

    return $counted;
}


/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 */

$testCases = [["", []],["Ala ma kota", ["Ala 3", "ma 2", "kota 4"]], ["Dlugosc slow ma znaczenie",  ["Dlugosc 7", "slow 4", "ma 2", "znaczenie 9"]], ["Lubie placki 7", ["Lubie 5", "placki 6", "7 1"]]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = wordLength($case[0])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td>{$case[0]}</td><td>[".implode($case[1], ",")."]</td><td>[".implode($results, ",")."]</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td>{$case[0]}</td><td>[".implode($case[1], ",")."]</td><td>[".implode($results, ",")."]</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>Długość słów</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Długość słów</h1>
        <p><a class='btn btn-lg btn-success' href='javascript:window.location.reload();' role='button'>Odświerz</a></p>
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