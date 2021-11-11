<?php
  class Database {
    //Params
    private $host = 'https://remotemysql.com/phpmyadmin/index.php?db=81lisJaB08'
    private $db_name = '81lisJaB08'
    private $username = '81lisJaB08';
    private $password = '5eI98MG8PP'
    private $con;


    //Connect
    public funtion connect() {
      $this->con = null;

      try {
        $this->con = new PDO('mysql:host=' . $this->host . ';db_name=' . $this->db_name, $this->username, $this->password);
        $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      } catch(PDOException $e) {
        echo 'Connection Error: ' . $e->getMessage();
      }

      return $this->con;
    }
  }
