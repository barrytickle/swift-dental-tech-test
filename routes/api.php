<?php

use App\Http\Controllers\api\numberController;
use App\Http\Controllers\api\romanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('/roman-to-number', numberController::class);
Route::apiResource('/number-to-roman', romanController::class);