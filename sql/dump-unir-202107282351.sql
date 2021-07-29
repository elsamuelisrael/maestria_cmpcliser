-- MySQL dump 10.13  Distrib 8.0.0-dmr, for osx10.11 (x86_64)
--
-- Host: localhost    Database: unir
-- ------------------------------------------------------
-- Server version	8.0.0-dmr

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `losnombres`
--

DROP TABLE IF EXISTS `losnombres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `losnombres` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` char(255) COLLATE utf8_spanish_ci NOT NULL,
  `activo` smallint(5) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `losnombres`
--

LOCK TABLES `losnombres` WRITE;
/*!40000 ALTER TABLE `losnombres` DISABLE KEYS */;
INSERT INTO `losnombres` VALUES (1,'María Luisa Azcárraga Miquel',1),(2,'Fernando González Azcarraga',1),(3,'Luna Daniela Pérez González',1),(4,'Laura Miquel González',1),(5,'Alfredo Pérez Velázquez',1),(6,'Martha Alicia Velazquez Flores',1),(7,'Samuel I. Azcárraga Velázquez',1),(10,'Jorge Alberto Frias Rochin',1),(21,'Leslie Lorena Tinajero Uribe',1);
/*!40000 ALTER TABLE `losnombres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'unir'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-28 23:51:04