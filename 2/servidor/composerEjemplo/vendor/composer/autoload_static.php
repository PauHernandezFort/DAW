<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7c9ae5463e8533825147820536096418
{
    public static $prefixLengthsPsr4 = array (
        'c' => 
        array (
            'composerEjemplo\\' => 16,
        ),
        'M' => 
        array (
            'MabeEnum\\' => 9,
        ),
        'J' => 
        array (
            'JsonSchema\\' => 11,
        ),
        'I' => 
        array (
            'Icecave\\Repr\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'composerEjemplo\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'MabeEnum\\' => 
        array (
            0 => __DIR__ . '/..' . '/marc-mabe/php-enum/src',
        ),
        'JsonSchema\\' => 
        array (
            0 => __DIR__ . '/..' . '/justinrainbow/json-schema/src/JsonSchema',
        ),
        'Icecave\\Repr\\' => 
        array (
            0 => __DIR__ . '/..' . '/icecave/repr/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'I' => 
        array (
            'Icecave\\Parity' => 
            array (
                0 => __DIR__ . '/..' . '/icecave/parity/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Stringable' => __DIR__ . '/..' . '/marc-mabe/php-enum/stubs/Stringable.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7c9ae5463e8533825147820536096418::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7c9ae5463e8533825147820536096418::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit7c9ae5463e8533825147820536096418::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit7c9ae5463e8533825147820536096418::$classMap;

        }, null, ClassLoader::class);
    }
}