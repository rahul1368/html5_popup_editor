<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 5)->create();

        \App\User::create([
            'name' => 'Rahul Kumar',
            'email' => 'rahulchoudhary666666@gmail.com',
            'password' => bcrypt('secret'),
            'is_admin' => true,
            'remember_token' => Str::random(10),
        ]);
    }
}
