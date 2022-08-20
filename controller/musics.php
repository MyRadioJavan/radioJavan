<?php

include "model/dataBase.php";

$album_id=$_GET["album"];

$musics=$db->query("SELECT * FROM musics WHERE album_id=$album_id");

$rowNumbers=$musics->num_rows;


$jsonArray = array();
while($row =mysqli_fetch_assoc($musics))
{
    $jsonArray[] = $row;
}




$albums=$db->query("SELECT * FROM albums WHERE id=$album_id")->fetch_assoc();

$artist_id=$albums["artists_id"];

$artist_name=$db->query("SELECT name FROM artists WHERE id=$artist_id");
$artist_name=$artist_name->fetch_assoc();

require  "view/musics.php";

?>