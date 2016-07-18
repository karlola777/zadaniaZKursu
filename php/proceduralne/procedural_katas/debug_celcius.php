<?php
/*
 * Podane są dwie funkcje:
 * ConvertToCelsius(farenheit) - funkcja która przyjmuje wartość temeratury w stopniach farenheita i zwraca w stopniach celciusza
 * WeatherInfo($temp) - funkcja która przyjmuje temperatuję w stopniach farenheita i wypisuje informaczje o temperaturze w stopniach celciusza i informacje o tym czy jest poniżej zera.
 *
 * NIestety w obu funkcjach wkradły się błędy (dużo), zarówno składniowe jak i logiczne.
 * Napraw je.
 */

function ConvertToCelsius($temperature) {
    $c = ($temperature - 32) * (5 / 9);
    return $c;
}


function WeatherInfo($temp){
    $c = ConvertToCelsius($temp);
    if ($c > 0) {
        return ($c ." is above freezing temperature");
    }
    else {
        return ($c ." is freezing temperature");
    }
}

/*
 * Kod popniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 * Strona nie będzie się wyświetlać do chwili w której nie naprawisz błedów składniowych (pamiętaj żeby patrzeć do pliku z błędami).
 */

$testCases = [[50, '10 is above freezing temperature'], [23,  '-5 is freezing temperature']];
$results = "";
foreach($testCases as $case){
    if(($funcValue = WeatherInfo($case[0])) === $case[1]){
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
    <title>Debugowanie: przeliczanie temperatur</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Debugowanie: przeliczanie temperatur</h1>
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