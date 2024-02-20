<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio 1</title>
    <link rel="stylesheet" href="/cursophp/styleusado.css">
</head>

<body>
    <?php

    $idadeinserida = $_REQUEST['idade'] ?? 2005;
   
    $anoatualrece = $_REQUEST['anoatual'] ?? date('Y');
    $anoatual = intval($anoatualrece);

    $resul = $anoatual - $idadeinserida;
?>
    <main>
        <h1>Informe um Número</h1>

        <form action="<?=$_SERVER['PHP_SELF']?>" method="post">

       <label for="idade">Em que ano você nasceu?</label>
       <input type="number" name="idade" id="idade" value="<?=$idadeinserida?>">

       <label for="anoatual">Sua idadde em até que ano? (Ano atual <?=$anoatual?>)</label>
       <input type="number" name="anoatual" id="anoatual" value="<?=$anoatual?>">

            <input type="submit" value="Processar">

        </form>


        <section>

        <h2>Resultado</h2>


        <?= "Quem nascer em $idadeinserida vai ter $resul anos em $anoatual"?>
      

        </section>


    </main>


</body>

</html>