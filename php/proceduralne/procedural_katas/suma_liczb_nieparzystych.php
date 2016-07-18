<?php
/*
 * Mając poniższy schamat generowania liczb nieparzystych:
 * 1:            1              1
 * 2:          3   5            8   //+19
 * 3:        7   9   11         27  //+37
 * 4:      13  15  17  19       64
 * 5:    21  23  25  27  29     125
 * 6:  31  33  35  37  39  41
 * 7:43  45
 * napisz funkcjię która zwróci sume liczb z danego rzędu.
 *
 * Pyrzykłady:
 * sumOdd(1) => 1
 * sumOdd(2) => 8
 */

function sumOdd($rowNo){
	/*oblicza początek i koniec rządka w całym ciągu*/
		$allRows = range(0, $rowNo, 1);
		$rowEndPos = array_sum($allRows); //dla rzędu 4 to poz. 10 (nie licząc już zera pocz.)
		$rowStartPos = $rowEndPos - $rowNo;  //bo numer rzędu = liczba wyrazów w nim
	/* wypisuje liczby nieparzyste do końcowej */
			$n = 1;
			for ($i = 1; $i < $rowEndPos; $i++){
			$n = $n+2;	//koniec rzędu 4 ma wartość 19
			}
	$allOdds = range(1, $n, 2);
	$row = array_slice($allOdds, $rowStartPos, $rowNo);
	$rowSum = array_sum($row);
	return $rowSum;
}


/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 */

$testCases = [[1, 1], [2, 8], [42, 74088]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = sumOdd($case[0])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td> {$case[0]} </td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td> {$case[0]} </td><td>{$case[1]}</td><td>$funcValue</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>Suma liczb nieparzystych</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Suma liczb nieparzystych</h1>
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