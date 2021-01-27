<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JurnalController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a middleware which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('jurnals', JurnalController::class);