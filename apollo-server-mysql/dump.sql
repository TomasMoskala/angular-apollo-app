CREATE TABLE `user` (
  `user_id` SMALLINT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
PRIMARY KEY (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` (`user_name`) VALUES
('user_1'), ('user_2'), ('user_3'), ('user_4'), ('user_5')
