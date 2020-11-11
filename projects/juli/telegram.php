<?php

/* https://api.telegram.org/bot1335791133:AAGLXtjROhGL-jWLntkIEE_nj_xHnDbp9bo/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$phone_sale_catalog = $_POST['phone_sale_catalog'];
$phone_sale_1 = $_POST['phone_sale_1'];
$phone_consultation = $_POST['phone_consultation'];
$token = "1335791133:AAGLXtjROhGL-jWLntkIEE_nj_xHnDbp9bo";
$chat_id = "-459239070";
$arr = array(
  '-20% на первом экране: '=> $phone_sale_1,
  '-20% в каталоге:' => $phone_sale_catalog,
  'консультация: ' => $phone_consultation,
  
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: Thanks.html');
} else {
  echo "Error";
}
?>