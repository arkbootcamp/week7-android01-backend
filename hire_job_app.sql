-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2020 at 09:15 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hire_job_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `name_project` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `duration` varchar(30) NOT NULL,
  `image` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id_project`, `name_project`, `description`, `price`, `duration`, `image`) VALUES
(1, 'Sistem Manajemen Absensi Pegawai Pemda Kota Tangerang Selatan', 'Membuat aplikasi web absensi pegawai pemda kota tangerang selatan', 10000, '3 Month', NULL),
(2, 'Sistem Manajemen Administrasi Kantor BPK', 'Membuat aplikasi web absensi pegawai pemda kota tangerang selatan', 100000, 'undefined', NULL),
(3, 'Sistem Manajemen Administrasi Kantor BPK2', 'Sistem untuk mengatur administrasi kantor BPK', 100000, '4 Month', NULL),
(4, '\'sadasda\'', 'Sistem untuk mengatur administrasi kantor BPK', 30000000, '4 Month', NULL),
(5, 'Sistem Manajemen Absensi Pegawai Pemda Kota Bekasi', 'Membuat aplikasi web absensi pegawai pemda kota bekasi', 450000, '3 Month', NULL),
(6, 'Sistem Manajemen Absensi Pegawai Pemda Kota Tangerang Selatan', 'Membuat aplikasi web absensi pegawai pemda kota tangerang selatan', 20000000, '6 Month', NULL),
(7, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(8, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(13, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(14, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(15, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(16, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(17, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(18, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(19, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(22, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(23, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(24, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(25, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(26, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', NULL),
(27, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836304637'),
(28, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836423476-download.png'),
(29, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836626552-download.png'),
(30, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', ''),
(31, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836702229-download.png'),
(32, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836832665-download.png'),
(33, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836851850-download.png'),
(34, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836883951-download.png'),
(35, 'Sistem Manajemen Parkir Kantor BPK', 'Sistem untuk mengatur parkir kantor BPK', 50000000, '6 Month', 'image-1600836898012-download.png');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id_skill` varchar(100) NOT NULL,
  `skill_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id_skill`, `skill_name`) VALUES
('1', 'Kotlin'),
('2', 'Javascript'),
('3', 'PHP'),
('4', 'Go');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` text NOT NULL,
  `user_role` int(1) NOT NULL,
  `user_status` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_role`, `user_status`, `created_at`, `updated_at`) VALUES
(6, 'Rosyida', 'rosyida@gmail.com', '$2a$10$7n/l77ZBzUL5r4bXrVWBAuCE6fQOmCbhxAbF9lVtLeKEc4rTEtJyy', 1, 0, '2020-09-22 08:06:01', '2020-09-22 08:06:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
