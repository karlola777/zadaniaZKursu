<?php
/*
 * Napisz funkcję która wyliczy średnią arytmetyczną z wartości podanych w tablicy. Funkcja ma przyjmować tablicę z liczbami i zwracać ich średnią.
 *
 * Przykłady:
 * arrayMean([1]) => 1
 * arrayMean([1,3,5,7]) => 4
 */



function arrayMean($array){
	foreach ($array as $number){
	$sum += $number;
	}
	$qty = count($array);
	$mean = $sum / $qty;
	return $mean;
}


/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 */

$testCases = [[[1], 1], [[1,3,5,7], 4], [[2,5,4,1,2,3], 2.8], [[-1,-1,-1,-1,-1], -1], [[4,23,84,12,76,34,-7,-23], 25.375]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = arrayMean($case[0])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td> [".implode($case[0], ",")."] </td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td> [".implode($case[0], ",")."] </td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>Średnia</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Średnia</h1>
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