drop database if exists drytech;

create database drytech;
use drytech;

create table demo(
    id int NOT NULL auto_increment,
    nombres varchar(255) NOT NULL,
    apellidos varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    telefono varchar(10) NOT NULL,
    lavanderia varchar(255) NOT NULL,
    cargo varchar(255) NOT NULL,
    primary key (id)
);

insert into demo values (null, 'Eduardo', 'Camavinga', 'edu@gmail.com', '987654321', 'aquarela', 'CEO');