<?php
Use App\Item;

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::post('/update', function(Request $request) {
    $id = $request->get('id');
    $item = Item::findOrFail($id);
    $item->update($request->all());

    return $item;
});

Route::get('/', function() {
    return Item::all();
});
