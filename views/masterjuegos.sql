-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2023 a las 00:51:14
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `masterjuegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorys`
--

CREATE TABLE `categorys` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(150) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `homes`
--

CREATE TABLE `homes` (
  `home_id` int(11) NOT NULL,
  `first_page_title` text NOT NULL,
  `first_page_description` text NOT NULL,
  `second_page_title` text NOT NULL,
  `second_page_description` text NOT NULL,
  `third_page_title` text NOT NULL,
  `third_page_description` text NOT NULL,
  `contact_title` text NOT NULL,
  `contact_cellphone` int(9) NOT NULL,
  `contact_email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_uuid` varchar(36) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` double NOT NULL,
  `product_code` varchar(30) NOT NULL,
  `product_descriptions` text DEFAULT NULL,
  `product_functions` text DEFAULT NULL,
  `product_specifications` text DEFAULT NULL,
  `product_cant_people` int(11) DEFAULT NULL,
  `product_dimensions` text DEFAULT NULL,
  `product_muscle_description` text DEFAULT NULL,
  `product_disability` int(11) DEFAULT NULL,
  `product_status` int(11) DEFAULT NULL,
  `product_category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_imgs`
--

CREATE TABLE `product_imgs` (
  `product_img_id` int(11) NOT NULL,
  `product_base64` text NOT NULL,
  `product_uuid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_uuid` varchar(36) NOT NULL,
  `user_name` varchar(150) NOT NULL,
  `user_password` text NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`category_id`);

--
-- Indices de la tabla `homes`
--
ALTER TABLE `homes`
  ADD PRIMARY KEY (`home_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_uuid`),
  ADD KEY `FK_694c772e-8a5a-4306-8445-05a85fd7b486` (`product_category_id`);

--
-- Indices de la tabla `product_imgs`
--
ALTER TABLE `product_imgs`
  ADD PRIMARY KEY (`product_img_id`),
  ADD KEY `FK_c5053f55-0cb1-4a66-81af-020c5f055ca4` (`product_uuid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_uuid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product_imgs`
--
ALTER TABLE `product_imgs`
  MODIFY `product_img_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_694c772e-8a5a-4306-8445-05a85fd7b486` FOREIGN KEY (`product_category_id`) REFERENCES `categorys` (`category_id`);

--
-- Filtros para la tabla `product_imgs`
--
ALTER TABLE `product_imgs`
  ADD CONSTRAINT `FK_c5053f55-0cb1-4a66-81af-020c5f055ca4` FOREIGN KEY (`product_uuid`) REFERENCES `products` (`product_uuid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
