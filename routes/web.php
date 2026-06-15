<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['ok' => true, 'message' => 'Welcome to the API'];
});
