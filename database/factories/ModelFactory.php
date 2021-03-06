<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

use Illuminate\Support\Str;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
        'about' => $faker->sentence(10),
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => Str::random(10),
    ];
});

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Item::class, function (Faker\Generator $faker) {

    $title = $faker->sentence;

    return [
        'title' => $title,
        'slug' => Str::slug($title),
        'top' => "0px",
        'left'=>"0px",
        'content'=>$faker->sentence($nbWords = 2, $variableNbWords = true),
        'created_at' => \Carbon\Carbon::now(),
    ];
});
