

<!--Code for filling a PHP array with drug array sent from mobile application-->
<?php
$drugs = array(count arrayFromMobileApplication);

for($x = 0; $x < $arrlength; $x++) {
    $drugs[$x]= arrayFromMobileApplication[$x];
 }
?>

<!--ADR Reporter.-->
<?php
$adr = adrFromMobileApplication;

//masterTable is a multidimensional arry for the table that stores all drugs, adrs, frequency, etc. masterTable[drug][adr][frequenecy]
for($x = 0; $x < $arrlength; $x++)
	for($y = 0; $y < $masterTable[$x][$arrlength]; $y++)
		if ($drugs[$x]==masterTable[$x] and $adr==$masterTable[$x][$y])
			echo $masterTable[$x] "causes" $masterTable[$x][$y] "with" $masterTable [$x][$y][$z] "frequency";
   

?>

