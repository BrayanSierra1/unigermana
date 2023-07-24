-- Active: 1689871646523@@127.0.0.1@3306
CREATE DATABASE `inventario` 
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE `inventario`.`usuarios` (
  `Id_usuario` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NOT NULL,
  `usuario` VARCHAR(32) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `email` VARCHAR(300) NOT NULL,
  `observaciones` VARCHAR(250) NULL,
  PRIMARY KEY (`Id_usuario`),
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC) VISIBLE);
  
  INSERT INTO `inventario`.`usuarios` 
    (`nombre`, `usuario`, `password`, `email`, `observaciones`) 
  VALUES 
    ('Brayan Ramirez', 'Brayan1625', 'cualquiera125', 'bryan1255@gmail.com', 'primer usuario');



CREATE TABLE `inventario`.`categorias` (
  `id_categorias` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `codigo` VARCHAR(6) NOT NULL,
  `nombre` VARCHAR(80) NOT NULL,
  `descripcion` VARCHAR(30) NULL,
  `observacion` VARCHAR(300) NULL,
  PRIMARY KEY (`id_categorias`),
  UNIQUE INDEX `id_categorias_UNIQUE` (`id_categorias` ASC) VISIBLE,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `inventario`.`elementos` (
  `id_categorias` INT(11) UNSIGNED NOT NULL,
  `referencias` VARCHAR(15) NOT NULL,
  `nombres` VARCHAR(80) NOT NULL,
  `cantidad` INT(11) UNSIGNED NOT NULL,
  `valor` DECIMAL(10) UNSIGNED NOT NULL,
  `estado` VARCHAR(100) NULL,
  `lugar` VARCHAR(80) NULL,
  `fecha_reg` DATE NOT NULL,
  `hora_reg` TIME NOT NULL,
  `observaciones` VARCHAR(300) NULL,
  PRIMARY KEY (`id_categorias`, `cantidad`, `valor`),
  UNIQUE INDEX `nombres_UNIQUE` (`nombres` ASC) VISIBLE,
  CONSTRAINT `id_categorias`
    FOREIGN KEY (`id_categorias`)
    REFERENCES `inventario`.`categorias` (`id_categorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;