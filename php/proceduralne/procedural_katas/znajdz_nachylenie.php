<?php
/* Poniżej jest zrobione zgodnie z wikipedią, a nie treścią zadania.
Wierne oddanie treści zadania w pliku znajdz_nachylenie2 - nie zalicza mi wielu przypadków */
function FindSlope($a, $b, $c, $d){
	$slope = ($d - $c) / ($b - $a);
	if ($b == $d) {
		return 'zerowa';
	}
	elseif ($a == $c) {
		return 'niezdefiniowana';
	}
	elseif ($slope > 0) {
	return 'dodatnia';
	}
	elseif ($slope < 0){
	return 'ujemna';
	}
}
 /* nie przechodzę przypadku: 	[15, 45, 12, 60] ale 30/48 = 0,625 > 0 */

/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 */


$testCases = [[[19,3,20,3], "zerowa"], [[2,7,4,-7], "ujemna"], [[10,50,30,150], "dodatnia"], [[15,45,12,60], "ujemna"], [[10,20,20,80], "dodatnia"], [[-10,6,-10,3], "niezdefiniowana"]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = FindSlope($case[0][0],$case[0][1],$case[0][2],$case[0][3])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td> {$case[0][0]}, {$case[0][1]}, {$case[0][2]}, {$case[0][3]} </td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td> {$case[0][0]}, {$case[0][1]}, {$case[0][2]}, {$case[0][3]} </td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>FindSlope</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>FindSlope</h1>
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