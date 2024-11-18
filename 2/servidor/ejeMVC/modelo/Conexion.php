<?php

class Conexion
{
    private $host;
    private $userName;
    private $password;
    private $db;
    protected $conn;

    public function __construct($host, $userName, $password, $db)
    {
        $this->host = $host;
        $this->userName = $userName;
        $this->password = $password;
        $this->db = $db;
        $this->connect();
    }

    public function __destruct()
    {
        $this->conn->close();
    }
    public function connect(){
        $this->conn = new \mysqli($this->host, $this->userName, $this->password, $this->db);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
        }

        public function getConn(){
            return $this->conn;
        }

}