CREATE DATABASE tareas_db;

USE tareas_db;

CREATE TABLE tareas (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        titulo VARCHAR(255) NOT NULL,
                        descripcion TEXT NOT NULL,
                        estado ENUM('pendiente', 'completada') DEFAULT 'pendiente'
);