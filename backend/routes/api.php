<?php

use App\Http\Controllers\PoetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('poets', [PoetController::class, 'index']);
Route::get('poets/{id}', [PoetController::class, 'show']);
Route::post('poets', [PoetController::class, 'store']);
Route::put('poets/{id}', [PoetController::class, 'update']);
Route::delete('poets/{id}', [PoetController::class, 'destroy']);
