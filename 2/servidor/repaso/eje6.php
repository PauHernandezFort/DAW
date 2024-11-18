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

}
public function connect(){
    $this->conn = new mysqli($this->host, $this->userName, $this->password, $this->db);
    if ($this->conn->connect_error) {
        die("Connection failed: " . $this->conn->connect_error);
    }

    public function getConn(){
        return $this->conn;
    }

    public function add($name,$id,$password,$secure){
        $query = "INSERT INTO users ($id,$nombre,$estado)";
        if(mysqli_query($this->conn,$query){
            return true;
        }
        else{
            echo "Error: ".mysqli_error($this->conn);
        }

    }
    public function delete($id){
        $query = "DELETE FROM users WHERE id = $id";
        if(mysqli_query($this->conn,$query)){
            return true;
        }else{
            echo "Error: ".mysqli_error($this->conn);
        }
    }

    public function update($id,$name,$estado,){
        $query="UPDATE users SET $name,$estado = '$password' WHERE id = $id";
        if(mysqli_query($this->conn,$query)){
            return true;}
        else{ echo "Error: ".mysqli_error($this->conn);}
    }
    public function select($id){
        $query = "SELECT * FROM users WHERE id = $id";
        if(mysqli_query($this->conn,$query)){
            return true;
        }else{
            echo "Error: ".mysqli_error($this->conn);
        }
    }

}
?>