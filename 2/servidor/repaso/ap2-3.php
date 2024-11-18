<?php
class DatabaseConnection {
    private $host;
    private $userName;
    private $password;
    private $db;
    protected $conn;
    private static $instance = null;


    private function __construct($host, $userName, $password, $db) {
        $this->host = $host;
        $this->userName = $userName;
        $this->password = $password;
        $this->db = $db;
    }


    public static function getInstance($host, $userName, $password, $db) {
        if (self::$instance == null) {
            self::$instance = new DatabaseConnection($host, $userName, $password, $db);
        }
        return self::$instance;
    }


    private function __clone() {}


    public function connect() {
        $this->conn = new mysqli($this->host, $this->userName, $this->password, $this->db);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function getConexion() {
        echo "todo bien mi rey";
        return $this->conn;
    }
}

$conexion = DatabaseConnection::getInstance('servidor_db','root', 'root', 'AP1');
$conexion->connect();
$conexion->getConexion()
?>
