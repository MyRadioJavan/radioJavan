<?php
include "model/dataBase.php";

$genre_id=$_GET["genre_id"];

$musics=$db->query("SELECT * FROM musics WHERE genre_id=$genre_id");

$genres=$db->query("SELECT * FROM genres WHERE id=$genre_id")->fetch_assoc();




require  "view/genre_musics.php";

?>