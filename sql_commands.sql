CREATE TABLE shopdb;

USE shopdb;

CREATE TABLE compras (
  idCompras INT NOT NULL AUTO_INCREMENT,
  producto VARCHAR(45) NOT NULL,
  cantidad INT NOT NULL,
  PRIMARY KEY (idCompras)
  );

INSERT INTO compras(producto, cantidad) VALUES ("leche", 3);
INSERT INTO compras(producto, cantidad) VALUES ("pan", 2);
INSERT INTO compras(producto, cantidad) VALUES ("cafe", 1);