<?php
/*
 * Napisz funkcję która pobiera napis, dzieli go na poszczególne słowa i zwraca napis składający się z tych słów w odwrotnej kolejności.
 *
 * Przykład
 * wordBackwords("Ala ma kota") => "kota ma Ala"
 * wordBackwords("Jabłka pomarańcze gruszki") => "gruszki pomarańcze Jabłka"
 * wordBackwords("Lubie programować i rozwiązywać zadania") => "zadania rozwiązywać i programowac Lubie"
 */

function wordBackwords($string){
        $words = explode(" ", $string);
        $wordsArray = array_reverse($words);
        $backwards = implode(' ', $wordsArray);
    return $backwards;
}


/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 */

$testCases = [["", ""],["Ala ma kota", "kota ma Ala"], ["Dlugosc slow nie ma znaczenia",  "znaczenia ma nie slow Dlugosc"], ["Lubie placki 7", "7 placki Lubie"]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = wordBackwords($case[0])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td>{$case[0]}</td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td>{$case[0]}</td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>Odwracanie napisów</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Odwracanie napisów</h1>
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