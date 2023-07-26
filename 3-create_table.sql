CREATE TABLE `tbl_usuario` (
	`id` INT(11) NOT NULL COMMENT 'ID del usuario',
	`nombre` VARCHAR(200) NOT NULL COMMENT 'Nombre del usuario' COLLATE 'latin1_swedish_ci',
	`edad` INT(11) NOT NULL COMMENT 'Edad del usuario',
	`genero` CHAR(1) NOT NULL COMMENT 'Genero del usuario (M = Masculino y F = Femenimo)' COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COMMENT='Tabla de usuarios'
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
