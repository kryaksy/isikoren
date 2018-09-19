<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'isikoren-dev');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?x>e9iXQ~h(pk!x`JbqFf|%qQ][I={jh4BF@/xJ3A5NNMUO&ihiYM;-h4/zAyWV`');
define('SECURE_AUTH_KEY',  'B-s.neXvyv:#Fr-BQnxc#V5cI+v=`21l`Qj7+1nPGa!&|FJ?>f~|$O!X@gA#x+gv');
define('LOGGED_IN_KEY',    '!S7R?Uo;P7h/G_7tJJN,3/l|6^xx[e`N3R`[!fSUqF4f4DsKNAH#_n=ca/!rT^y2');
define('NONCE_KEY',        '?.27+d)e#NE$op*c60Q!SMnnS=#yQsWB?(Hk/C:Bc9+]?rFZFzA/a*]KO<#VR6jk');
define('AUTH_SALT',        'Fq!1V(y${BV1[{=ARO8ht,f|_AqMo=fW1;7nTdDk (`-d?#!ljF!6}k%zVW6Bog5');
define('SECURE_AUTH_SALT', '+GL^,ZKkw/-P#AiZIHoTKSvKQ&f7u=%9SQnY1gQ1?2QaJc8]8}wn5ZHgQL&L.)i=');
define('LOGGED_IN_SALT',   'h?)G50S:jloY5+D&Yi/sN#lu]mhqPQOBY~]J]ntEsG*#:P?AR<Ra}F0k5-A7}N,x');
define('NONCE_SALT',       'EvyqPY|SJ$]:Y?bd:^4Y&`;&59~Sws_}RHnf=vy#U&!lBe8]U/P?-j%h+~&v{5N.');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
