<?php
include "model/dataBase.php";

echo "hi";


if (isset($_POST["name"])) {
    echo "bye";
    $name = $_POST["name"];

    if ($_FILES["image"]["size"] > 50000000) {
        echo "فایل خیلی بزرگ است";
        header("Location:add_artist.php");
    } else {
        echo "salam";
//        step one

        $image = "view/image/artists/" . $_FILES["image"]["name"];

        //     image/artists/1.jpg

        $db->query("INSERT INTO artists(name,image) VALUES('$name','$image')");
        move_uploaded_file($_FILES["image"]["tmp_name"], $image);
        header("Location:artist_admin.php");
    }


}


?>
