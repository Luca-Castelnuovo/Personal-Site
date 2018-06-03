<?php
if (isset($_GET['id'])) {
    $file = $_GET['id'] . '.pdf';
    if (file_exists($file)) {
        header('Content-type: application/pdf');
//        header('Content-Disposition: inline; filename="' . $name . '.pdf"');
        @readfile($file);
    } else {
        header('Location: error?code=404');
    }
} else {
   
}
