CREATE DATABASE products;

USE products;

CREATE TABLE product (
  id int NOT NULL,
  campus varchar(24),
  name varchar(50),
  description varchar(255),
  category varchar(50),
  default_price varchar(20),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

CREATE TABLE styles (
  productID int NOT NULL,
  id int NOT NULL,
  name varchar(255),
  original_price varchar(20),
  sale_price varchar(20),
  default varchar(5),
  PRIMARY KEY (id),
  FOREIGN KEY (productID) REFERENCES product(id)
);

CREATE TABLE features (
  feature varchar(50),
  value varchar(50),
  productID int NOT NULL,
  FOREIGN KEY (productID) REFERENCES product(id)
);

CREATE TABLE sku (
  styleID int NOT NULL,
  sku varchar(16),
  quantity int,
  size varchar(5),
  FOREIGN KEY (styleID) REFERENCES styles(id)
)

CREATE TABLE photos (
  styleID int NOT NULL,
  thumbnail varchar(152),
  url varchar(152),
  FOREIGN KEY (styleID) REFERENCES styles(id)
);

CREATE TABLE cart (
  userID varchar(50) NOT NULL,
  sku varchar(16),
  quantity int,
  FOREIGN KEY (sku) REFERENCES sku(sku)
);