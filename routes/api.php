<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

 

Route::get('/v1/cashier/balance',  array('middleware' => 'cors', 'uses' => 'CierreCajasController@findAll' ));
Route::post('/v1/cashier/balance/open/day',array('middleware' => 'cors', 'uses' => 'CierreCajasController@create'));
Route::post('/v1/cashier/balance/close/day',array('middleware' => 'cors', 'uses' => 'CierreDiaController@create'));

Route::get('/v1/has/open/cashier/balance',  array('middleware' => 'cors', 'uses' => 'CierreCajasController@cierreCajas' ));

 
