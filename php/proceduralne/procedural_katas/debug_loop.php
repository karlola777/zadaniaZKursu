<?php
/*
 * Mamy funkcje która powinna generować tablicę z liczbami od 1 do n, gdzie n jest przyjmowana jako parametr.
 * Niestety w funkcj są błędy. Napraw je.
 */

function WeatherInfo($number){
    $newArray = array ();
    for($counter = 1; $counter <= $number; $counter++){
        $newArray[] = $counter;
    }
  return $newArray;
}

/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 * Strona nie będzie się wyświetlać do chwili w której nie naprawisz błedów składniowych (pamiętaj żeby patrzeć do pliku z błędami).
 */

$testCases = [[5, [1,2,3,4,5]], [2,  [1,2]]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = WeatherInfo($case[0])) === $case[1]){
        $results .= "<tr class='success'><td> Ok </td><td> {$case[0]} </td><td>{$case[1]}</td><td>[".implode($results, ",")."]</td></tr>";
    }
    else{
        $results .= "<tr class='danger'><td> Fail </td><td> {$case[0]} </td><td>{$case[1]}</td><td>[".implode($results, ",")."]</td></tr>";
    }
}

echo("
<!DOCTYPE html>
<html lang='pl'>
  <head>
    <meta charset='utf-8'>
    <title>Debugowanie: Napraw pętle</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Debugowanie: Napraw pętle</h1>
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