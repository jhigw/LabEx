-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2024 at 10:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'asim', '$2y$10$8QbRDHRDbR2ZPI0hqXUEc.QBeUDVs5zhTUXoeFX8vvyq5nJEv8Ab2', '2024-10-02 14:56:22'),
(2, 'asim ko', '$2y$10$QGlDTGnqLKyF7eWQr2CK6uNO0JUyJ8A8B7afGGKmPfamCiMTz7B0O', '2024-10-02 15:02:22'),
(3, 'asimgg', '$2y$10$YncmzHEwanIf/mc0DBtEvO4GiR8RmDSFq87SNhiKWZC/gWqFWjOAq', '2024-10-02 15:02:28'),
(4, 'jhig', '$2y$10$OerfaAeE1tgxhyT9frBUd.9cIhOJOvk85YkHS2rfnTK7WDWwmy.vu', '2024-10-02 15:04:35'),
(5, 'kileg', '$2y$10$trCw6NLmdUu4Ji0A7Ee1reKS0rRcI2q37yHaSXQfnfBSiBgU7pls.', '2024-10-02 15:07:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
