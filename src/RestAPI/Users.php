<?php
  class Users {
    //DB info
    private $con
    private $table = 'Users';


    //User Properties
    public $RFID
    public $firstName
    public $lastName
    public $program
    public $teamNumber
    public $isAdmin
    public $useFabA
    public $useFabB
    public $useFabC
    public $useFabD
    public $useFabE

    //Constructor
    public funtion __construct($db) {
      $this->con = $db;
    }

    //Get Users
    public function queryTable() {
      //Create Query
      $query = 'SELECT
        u.RFID,
        u.firstName,
        u.lastName,
        u.program,
        u.teamNumber,
        u.isAdmin,
        u.useFabA,
        u.useFabB,
        u.useFabC,
        u.useFabD,
        u.useFabE
      FROM
        ' . $this->table . ' u ';

      //Prepare
      $stmt = $this->con->prepare($query);

      //Execute
      $stmt->execute();

      return $stmt;
    }
  }
