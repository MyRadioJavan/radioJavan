<?php
include "model/dataBase.php";

$albums=$db->query("SELECT * FROM albums");

require  "view/index.php";

?>