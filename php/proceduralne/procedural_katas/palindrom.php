<?php
/*
 * Napisz funkcję która sprawdza czy słowo jest palindromem (funkcja ma nie zwracać uwagi na wielkosc liter). Ma zwracać wartość boolean.
 *
 * Przykłady
 * palindrom("ala") => true
 * palindrom("Ala") => true
 * palinfrom("pomarańcz") => false
 */

//prosta, ale nie działa jeśli zadamy jej wyraz z >1 znakiem diakr.
function palinfrom($word){
    if ($word == "") {
        $bool = false;
    }
    else {
        $lcase = mb_strtolower($word);
        $bkws = strrev($lcase);
    if ($lcase == $bkws) {
        $bool = true;
    }
    else {
        $bool = false;
    }
}
return $bool;
}
//próbowałam jeszcze obsłużyć więcej niż 1 diakrytyk,
//ale funkcja poniżej jest "wybredna" z diakrytykami -
//jeden odwróci ładnie, innego nie.
//inspiracja tu: http://kvz.io/blog/2012/10/09/reverse-a-multibyte-string-in-php/

/*
    function palinfrom($word){
    mb_internal_encoding("UTF-8");
    if ($word == "") {
        $bool = false;
    }
    else {
        //kod poniżej przerobiony z tego (na problem z >1 diakrytykiem:
        //http://kvz.io/blog/2012/10/09/reverse-a-multibyte-string-in-php/
        $word = mb_strtolower($word);
        $length = mb_strlen($word, "UTF-8");
        $bkws = mb_substr($word, $length, 1, "UTF-8");
        //koniec "inspiracji"
        if ($bkws == $word) {
            $bool = true;
        }
        else {
            $bool = false;
        }
    }
    return $bool;
}
*/


/*
 * Kod poniżej służy wygenerowaniu testów i strony poglądaowej - nie modyfikujcie go!
 */

$testCases = [["", false],["Ala", true], ["Pomarańcza",  false], ["abba", true], ["abcdDCBA", true], ["łódźdół", true], ["gżegżółka", false], ["odwróć mnie", false]];
$results = "";
foreach($testCases as $case){
    if(($funcValue = palinfrom($case[0])) === $case[1]){
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
    <title>Palindrom</title>
    <link href='./css/bootstrap.min.css' rel='stylesheet'>

  </head>

  <body>

    <div class='container'>
      <div class='jumbotron'>
        <h1>Palindrom</h1>
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

?>