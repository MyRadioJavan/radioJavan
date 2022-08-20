<?php
include "model/dataBase.php";



$musics=$db->query("SELECT * FROM musics");




require  "view/all_musics.php";

?>