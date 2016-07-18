<?php
//usunięcie cookie?
if(isset($_GET['delcookie'])) {
    setcookie('declinedQtys', '', time() - 100);
}

//ciasteczka cz.1
$declinedQtys = array();
$badinput = "";
if (isset($_COOKIE['declinedQtys'])){
    $declinedQtys = unserialize($_COOKIE['declinedQtys']);
}

//formularz trafia do zmiennych
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (isset($_POST['decl'])) {
        $decl = $_POST['decl'];
        $qty = $_POST['decl']['qty'];
        $prod = $_POST['decl']['prod'];
    }
    //taka śmieszna walidacja
        if (is_numeric($qty) == false or $qty < 0) {
            $badinput = "<div class='error'>wpisz dowolną liczbę dodatnią,<br>ułamek z&nbsp;kropką lub 0</div>";
    }
          else {
          $qtyend = substr($qty, -1);
          //wzór nazwy pliku z tablicą odmian
          $declArrayFname = 'decl_'.$prod.'.php';
          $declArray = 'decl_'.$prod;
          include $declArrayFname;
          //$qty = floatval($qty);
                // co to za liczba lub jej ostatnia cyfra i do jakiego przypadka pasuje
                if ($qty < 1 && $qty > 0 or strpos($qty, ".") !== false){
                    $declProd = $prodDecl['sgGen'];
                }
                //20, 30 ... 100, 200 ... 1000
                if ($qty == 0) {
                    $declProd = $prodDecl['plGen'];
                }
                if ($qty == 1) {
                    $declProd = $prodDecl['sgNom'];
                }
                //naście + dopełniacz
                if ($qty > 10 and $qty < 20){
                  $declProd = $prodDecl['plGen'];
                }

                if ($qty > 20 or $qty < 10 and $qtyend == 2 or $qtyend == 3 or $qtyend == 4) {
                    $declProd = $prodDecl['plNom'];
                }
                if ($qtyend == 5 or $qtyend == 6 or $qtyend == 7 or $qtyend == 8 or $qtyend == 9) {
                    $declProd = $prodDecl['plGen'];
                }
              //ciasteczka cz.2
              if (isset($_POST['decl'])){
                  $declPair = "$qty $declProd";

                  if (!empty($declPair)){
                      $declinedQtys[] = $declPair;
                      setcookie('declinedQtys', serialize($declinedQtys),time() + 120);
                  }
              }
          }


}


?>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <title>Pieróg</title>
    <link href="style.css" type="text/css" rel="stylesheet" />
</head>
<body>

<div class="thething">
    <div class="somelist">

        <ul>
            <?php foreach ($declinedQtys as $declPair):
            echo '<li>'.$declPair.'</li>';
            endforeach;
            echo $badinput; ?>
        </ul>
    </div>
    <div class="form">
    <form method="post" action="index.php">
    <input title="quantity" type="text" name="decl[qty]"/>
    <select title="product" name="decl[prod]">
        <option value="pierog">pieróg</option>
        <option value="krasnal">Krasnal</option>
        <option value="ksiazka">książka</option>
        <option value="zdjecie" >zdjęcie</option>
    </select><br/><br/>
    <input type="submit" value="Wrzuć">
        </form><form>
    <input type="submit" name="delcookie" value="Usuń ciasteczko">
    </form>
    </div>

<ul>
<br/><br/><br/>Ybałt:
    <li>Zainspirowane <a href="http://mistrzowie.org/uimages/services/mistrzowie/i18n/pl_PL/201411/1416586278_by_diabelek95.jpg?1416911056" target="_new">tą</a> próbą wrednego pojazdu po Anglosasach
    <span style="font-size:xx-small;color:#d0e9c6">Inspired by this douchey attempt to roast some Anglos</span></li>
    <li>Ugrzęzłam w&nbsp;warunkach wybierania przypadka, więc jeszcze mogą być błędy... językowe</li>
    <li>Cookie wygasa samo po 2&nbsp;minutach zabawy, ale przycisk trzeba wcisnąć 2 razy. Może będzie lepiej, jak ogarnę Ajax.</li>
</ul>
</div>
</body>
</html>
