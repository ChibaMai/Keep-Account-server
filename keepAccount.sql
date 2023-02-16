-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: keepAccount
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookkeeping`
--

DROP TABLE IF EXISTS `bookkeeping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookkeeping` (
  `id` int NOT NULL AUTO_INCREMENT,
  `money` decimal(19,2) DEFAULT NULL,
  `category` varchar(24) DEFAULT NULL,
  `genre` int DEFAULT NULL,
  `time` varchar(32) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `month` int DEFAULT NULL,
  `comment` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookkeeping`
--

LOCK TABLES `bookkeeping` WRITE;
/*!40000 ALTER TABLE `bookkeeping` DISABLE KEYS */;
INSERT INTO `bookkeeping` VALUES (12,40.00,'💻 数码',1,'1673781336',2023,1,'购买一个月 Geph vpn'),(13,29.55,'📱 话费',1,'1673957919',2023,1,'联通话费'),(14,7643.89,'🏫 工资',0,'1673865035',2023,1,'新希望2022年12月工资'),(15,6.00,'💻 数码',1,'1674275864',2023,1,'iCloud订阅'),(16,9.99,'🧧 红包',0,'1674306835',2023,1,'小朋友红包'),(17,1.66,'🧧 红包',0,'1674303235',2023,1,'小妹红包'),(18,6.66,'🧻 日用',1,'1674350097',2023,1,'过年红包'),(19,8.88,'🧻 日用',1,'1674353758',2023,1,'小妹过年红包'),(20,100.00,'🧻 日用',1,'1674364552',2023,1,'小妹过年红包'),(21,63.00,'🥤 零食',1,'1674636500',2023,1,'方便面瓜子'),(22,47.00,'🥤 零食',1,'1674637462',2023,1,'米饼面包'),(23,29.55,'📱 话费',1,'1675446955',2023,2,'联通话费'),(25,7589.22,'🏫 工资',0,'1676361878',2023,2,'新希望2023年一月工资'),(26,5.00,'💻 数码',1,'1676370630',2023,2,'三丰云服务器充值'),(27,50.00,'🧻 日用',1,'1676544095',2023,2,'给小妹红包');
/*!40000 ALTER TABLE `bookkeeping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enactment`
--

DROP TABLE IF EXISTS `enactment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enactment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `setting_type` varchar(8) DEFAULT NULL,
  `expenditure` int DEFAULT NULL,
  `income` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enactment`
--

LOCK TABLES `enactment` WRITE;
/*!40000 ALTER TABLE `enactment` DISABLE KEYS */;
/*!40000 ALTER TABLE `enactment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expenditure`
--

DROP TABLE IF EXISTS `expenditure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenditure` (
  `id` int NOT NULL AUTO_INCREMENT,
  `money` decimal(19,2) DEFAULT NULL,
  `time` varchar(32) DEFAULT NULL,
  `month` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `genre` int DEFAULT NULL,
  `category` varchar(24) DEFAULT NULL,
  `comment` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenditure`
--

LOCK TABLES `expenditure` WRITE;
/*!40000 ALTER TABLE `expenditure` DISABLE KEYS */;
INSERT INTO `expenditure` VALUES (7,40.00,'1673781336',1,2023,1,'💻 数码','购买一个月 Geph vpn'),(8,29.55,'1673957919',1,2023,1,'📱 话费','联通话费'),(9,6.00,'1674275864',1,2023,1,'💻 数码','iCloud订阅'),(10,6.66,'1674350097',1,2023,1,'🧻 日用','过年红包'),(11,8.88,'1674353758',1,2023,1,'🧻 日用','小妹过年红包'),(12,100.00,'1674364552',1,2023,1,'🧻 日用','小妹过年红包'),(13,63.00,'1674636500',1,2023,1,'🥤 零食','方便面瓜子'),(14,47.00,'1674637462',1,2023,1,'🥤 零食','米饼面包'),(15,29.55,'1675446955',2,2023,1,'📱 话费','联通话费'),(17,5.00,'1676370630',2,2023,1,'💻 数码','三丰云服务器充值'),(18,50.00,'1676544095',2,2023,1,'🧻 日用','给小妹红包');
/*!40000 ALTER TABLE `expenditure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `income`
--

DROP TABLE IF EXISTS `income`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `income` (
  `id` int NOT NULL AUTO_INCREMENT,
  `money` decimal(19,2) DEFAULT NULL,
  `time` varchar(32) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `month` int DEFAULT NULL,
  `genre` int DEFAULT NULL,
  `category` varchar(24) DEFAULT NULL,
  `comment` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `income`
--

LOCK TABLES `income` WRITE;
/*!40000 ALTER TABLE `income` DISABLE KEYS */;
INSERT INTO `income` VALUES (5,7643.89,'1673865035',2023,1,0,'🏫 工资','新希望2022年12月工资'),(6,9.99,'1674306835',2023,1,0,'🧧 红包','小朋友红包'),(7,1.66,'1674303235',2023,1,0,'🧧 红包','小妹红包'),(8,7589.22,'1676361878',2023,2,0,'🏫 工资','新希望2023年一月工资');
/*!40000 ALTER TABLE `income` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `money` decimal(19,2) DEFAULT NULL,
  `month` int DEFAULT NULL,
  `time` varchar(32) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `category` varchar(32) DEFAULT NULL,
  `comment` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (2,1.00,1,'123',2023,'吃饭','测试'),(3,1.00,1,'123',2023,'吃饭','测试'),(9,100.00,1,'query.time',2023,'吃饭','ok'),(32,23.22,2,'2135425',2023,'吃饭','测试'),(33,232.20,1,'2135425',2023,'吃饭','测试'),(34,232.20,11,'2135425',2023,'吃饭','测试'),(35,232.20,6,'2135425',2023,'吃饭','测试'),(36,232.20,6,'2135425',2023,'吃饭','测试'),(37,232.20,6,'2135425',2023,'吃饭','测试'),(38,232.20,5,'2135425',2023,'吃饭','测试'),(39,232.20,3,'2135425',2023,'吃饭','测试'),(41,232.20,2,'2135425',2023,'吃饭','测试'),(42,232.20,8,'2135425',2023,'吃饭','测试');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16 18:51:29
