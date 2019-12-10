-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: abc_bankfinal
-- ------------------------------------------------------
-- Server version	5.6.33-log

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
-- Table structure for table `d_transaction`
--

DROP TABLE IF EXISTS `d_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `d_transaction` (
  `id` int(20) NOT NULL,
  `trans_date` date DEFAULT NULL,
  `credit` float DEFAULT NULL,
  `debit` float DEFAULT NULL,
  `account_no` int(15) DEFAULT NULL,
  `balance` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `d_transaction`
--

LOCK TABLES `d_transaction` WRITE;
/*!40000 ALTER TABLE `d_transaction` DISABLE KEYS */;
INSERT INTO `d_transaction` VALUES (111,'2019-10-10',500,0,123456,NULL),(112,'2019-10-10',500,0,123456,NULL),(113,'2019-11-28',100,0,123456,600),(114,'2019-11-28',0,100,234567,800),(115,'2019-11-28',500,0,456789,11500),(116,'2019-11-28',0,500,123456,12500),(117,'2019-11-28',500,0,456789,11000),(118,'2019-11-28',0,500,123456,13000),(119,'2019-11-28',0,500,456789,10500),(120,'2019-11-28',500,0,123456,13500),(121,'2019-11-29',0,500,123456,13000),(122,'2019-11-29',500,0,123456,14000),(123,'2019-11-29',0,120,123456,13880),(124,'2019-11-29',120,0,234567,920),(125,'2019-11-29',0,120,123456,13760),(126,'2019-11-29',120,0,234567,1040),(127,'2019-11-29',0,120,123456,13640),(128,'2019-11-29',120,0,234567,1160),(129,'2019-11-29',0,120,123456,13520),(130,'2019-11-29',120,0,234567,1280),(131,'2019-11-29',0,120,123456,13400),(132,'2019-11-29',120,0,234567,1400),(133,'2019-11-29',0,120,123456,13280),(134,'2019-11-29',120,0,234567,1520),(135,'2019-11-29',0,120,123456,13160),(136,'2019-11-29',120,0,234567,1640),(137,'2019-11-29',0,120,123456,13040),(138,'2019-11-29',120,0,234567,1760),(139,'2019-11-29',0,120,123456,12920),(140,'2019-11-29',120,0,234567,1880),(141,'2019-11-29',0,120,123456,12800),(142,'2019-11-29',120,0,234567,2000),(143,'2019-11-29',0,120,123456,12680),(144,'2019-11-29',120,0,234567,2120),(145,'2019-11-29',0,120,123456,12560),(146,'2019-11-29',120,0,234567,2240),(147,'2019-11-29',0,120,123456,12440),(148,'2019-11-29',120,0,234567,2360),(149,'2019-11-29',0,120,123456,12320),(150,'2019-11-29',120,0,234567,2480),(151,'2019-11-29',0,200,123456,12120),(152,'2019-11-29',200,0,234567,2680),(153,'2019-11-29',0,100,123456,12020),(154,'2019-11-29',100,0,234567,2780),(155,'2019-11-29',0,0,123456,12020),(156,'2019-11-29',0,0,0,0),(157,'2019-11-29',0,0,123456,12020),(158,'2019-11-29',0,0,0,0),(159,'2019-12-06',0,120,123456,11900),(160,'2019-12-06',120,0,234567,2900),(161,'2019-12-06',0,120,123456,11780),(162,'2019-12-06',120,0,234567,3020),(163,'2019-12-06',0,120,123456,11660),(164,'2019-12-06',120,0,234567,3140),(165,'2019-12-06',0,120,123456,11540),(166,'2019-12-06',120,0,234567,3260),(167,'2019-12-06',0,120,123456,11420),(168,'2019-12-06',120,0,234567,3380),(169,'2019-12-09',0,120,123456,11300),(170,'2019-12-09',120,0,234567,3500),(171,'2019-12-09',0,500,123456,10800),(172,'2019-12-09',500,0,234567,4000),(173,'2019-12-09',0,200,123456,10600),(174,'2019-12-09',200,0,234567,4200),(175,'2019-12-10',0,500,456789,10000),(176,'2019-12-10',500,0,123456,11100);
/*!40000 ALTER TABLE `d_transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-10 18:02:03
