-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Nov 19, 2016 at 09:37 PM
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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `bigtags`
--

INSERT INTO `bigtags` (`bigtag_id`, `tag_id`, `parent_tag_id`) VALUES
(1, 1, 0),
(2, 2, 0),
(3, 3, 0),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `event_tags`
--

CREATE TABLE IF NOT EXISTS `event_tags` (
  `event_id` int(11) NOT NULL,
  `tag` int(11) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  UNIQUE KEY `event_id_UNIQUE` (`event_id`)
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
  `retrieved` tinytext,
  `time_start` tinytext,
  `time_end` tinytext,
  `importance` int(11) DEFAULT '2',
  `approved` int(11) DEFAULT '0',
  PRIMARY KEY (`event_id`),
  UNIQUE KEY `event_id_UNIQUE` (`event_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `name`, `location`, `desc`, `retrieved`, `time_start`, `time_end`, `importance`, `approved`) VALUES
(1, 'Testing Event', 'idk', 'Testing12345', 'localhost', '1234238', '1231238', 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `tag_id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`tag_id`, `name`) VALUES
(1, 'Academic'),
(2, 'Athletics'),
(3, 'Social'),
(4, 'STEM'),
(5, 'Business'),
(6, 'Art'),
(7, 'Engineering'),
(8, 'Medical'),
(9, 'Science'),
(10, 'Computer Science'),
(11, 'Mechanical Engineering'),
(12, 'Math'),
(13, 'Chemistry'),
(14, 'Physics');

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
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `access`) VALUES
(1, 'email', 'password', 0);

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

--
-- Dumping data for table `users_preferences`
--

INSERT INTO `users_preferences` (`preference_id`, `user_id`, `tag_id`, `weight`) VALUES
(1, 1, 14, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
