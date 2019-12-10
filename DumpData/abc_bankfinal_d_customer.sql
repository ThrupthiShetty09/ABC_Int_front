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
-- Table structure for table `d_customer`
--

DROP TABLE IF EXISTS `d_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `d_customer` (
  `account_no` int(15) NOT NULL,
  `name` varchar(20) NOT NULL,
  `DOB` date NOT NULL,
  `phone_no` int(15) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `amount` float NOT NULL,
  `branch_id` int(20) DEFAULT NULL,
  `loan_id` varchar(20) DEFAULT NULL,
  `type_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`account_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `d_customer`
--

LOCK TABLES `d_customer` WRITE;
/*!40000 ALTER TABLE `d_customer` DISABLE KEYS */;
INSERT INTO `d_customer` VALUES (123456,'sagar','1998-06-10',98455900,'rahul','rahul',11100,1234,'S0001','S0001'),(234567,'aaaa','1994-12-06',8147804,'aaaaa','456789',4200,2345,'H0001','S0001'),(345678,'rachayyafgfg','1993-10-05',887454,'ballari','123456',5000,3456,'S0001','C0001'),(456789,'zzzz','1996-05-10',8197383,'arch','123456',10000,3456,'S0001','S0001'),(567890,'Arun Hamali','1996-07-10',8050401,'hamali','123456',5600,1234,'C0001','C0001'),(678901,'aaakjkj','1996-07-10',77603309,'apya','123456uiu',1000,1234,'C0001','S0001');
/*!40000 ALTER TABLE `d_customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-10 18:02:04
