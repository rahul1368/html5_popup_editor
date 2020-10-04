<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\User::where('is_admin', true)->first();
        // factory(App\Item::class, 10)->create([
        //     'user_id' => $user->id
        // ]);
        
        \App\Item::create([
            'title' => 'btn',
            'slug' => Str::slug('btn'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'input',
            'slug' => Str::slug('input'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'headerH2',
            'slug' => Str::slug('headerH2'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'footerP',
            'slug' => Str::slug('footerP'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'modalbgColor',
            'slug' => Str::slug('modalbgColor'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'modalContentbgColor',
            'slug' => Str::slug('modalContentbgColor'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'leftStar',
            'slug' => Str::slug('leftStar'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'middleStar',
            'slug' => Str::slug('middleStar'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
        \App\Item::create([
            'title' => 'rightStar',
            'slug' => Str::slug('rightStar'),
            'top' => "0px",
            'left'=>"0px",
            'content'=>"Sample text",
            'user_id' => $user->id
        ]);
    }
}
