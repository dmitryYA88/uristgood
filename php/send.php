<?php
if(!empty($_POST['name']) && !empty($_POST['phone']) ) {
    $message = trim($_POST['name']).':'.trim($_POST['phone']);
    mail('littleleon88@mail.ru', 'Запрос обратного звонка от', $message);
    echo 'Сообщение отправлено';
} else echo 'ФИО или телефон не заполнены';