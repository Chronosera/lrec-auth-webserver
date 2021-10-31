<?php
  //Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once 'C:\Users\Jackson\Source\Repos\lrec-auth-webserver\src\RestAPI\Database.php'
  include_once 'C:\Users\Jackson\Source\Repos\lrec-auth-webserver\src\RestAPI\Users.php'

  //Start DB Connect
  $database = new Database();
  $db = $database->connect();

  //Start User Object
  $users = new Users($db);

  //Query
  $result = $users->queryTable();
  //Return number of rows
  $rowNum = $result->rowCount();

  //Check if Null
  if($rowNum > 0) {
    //Create Array
    $users_array = array();
    $users_array['data'] = array();

    while($row = $result->fetch(PDO:FETCH_ASSOC)) {
      extract($row);

      $users_values = array(
        'RFID' => $RFID,
        'firstName' => $firstName,
        'lastName' => $lastName,
        'program' => $program,
        'teamNumber' => $teamNumber,
        'isAdmin' => $isAdmin,
        'userFabA' => $useFabA,
        'userFabB' => $useFabB,
        'userFabC' => $useFabC,
        'userFabD' => $useFabD,
        'userFabE' => $useFabE,
      );

      //Push to "data"
      array_push($users_array['data'], $users_values);
    }
    //Convert to json
    echo json_encode($users_array);
  } else {
    //No Users
    echo json_encode(
      array('message' => 'No Users in Table')
    );
  }
