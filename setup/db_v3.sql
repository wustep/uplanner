-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Nov 22, 2016 at 03:21 PM
-- Server version: 5.5.52-cll-lve
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wustagpl_hackohio16`
--

-- --------------------------------------------------------

--
-- Table structure for table `bigtags`
--

CREATE TABLE IF NOT EXISTS `bigtags` (
  `bigtag_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tag_id` int(10) unsigned DEFAULT NULL,
  `parent_tag_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`bigtag_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

-- --------------------------------------------------------

--
-- Table structure for table `codes`
--

CREATE TABLE IF NOT EXISTS `codes` (
  `code_id` int(11) NOT NULL,
  `field` int(11) DEFAULT NULL,
  `lookup` varchar(45) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`code_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext,
  `location` tinytext,
  `desc` text,
  `source1` tinytext,
  `source2` tinytext,
  `time_start` tinytext,
  `time_end` tinytext,
  `importance` int(11) DEFAULT '2',
  `approved` int(11) DEFAULT '0',
  PRIMARY KEY (`event_id`),
  UNIQUE KEY `event_id_UNIQUE` (`event_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=294 ;

-- --------------------------------------------------------

--
-- Table structure for table `event_tags`
--

CREATE TABLE IF NOT EXISTS `event_tags` (
  `event_tag_id` int(11) NOT NULL,
  `event_id` int(11) DEFAULT NULL,
  `tag` int(11) DEFAULT NULL,
  PRIMARY KEY (`event_tag_id`),
  UNIQUE KEY `event_tag_id_UNIQUE` (`event_tag_id`),
  UNIQUE KEY `event_id_UNIQUE` (`event_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` int(11) NOT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `tag_id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `leaf` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tags_relations`
--

CREATE TABLE IF NOT EXISTS `tags_relations` (
  `relation_id` int(11) NOT NULL AUTO_INCREMENT,
  `parent` int(11) DEFAULT NULL,
  `child` int(11) DEFAULT NULL,
  `weight` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`relation_id`),
  UNIQUE KEY `relation_id_UNIQUE` (`relation_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL,
  `email` tinytext,
  `password` text,
  `access` int(11) DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users_preferences`
--

CREATE TABLE IF NOT EXISTS `users_preferences` (
  `preference_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  `weight` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`preference_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
