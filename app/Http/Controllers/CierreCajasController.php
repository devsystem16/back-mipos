<?php

namespace App\Http\Controllers;

use App\Entities\CierreCajas;
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class CierreCajasController extends Controller
{

    public function cierreCajas (){
       return  $data =  DB::select("SELECT 'Success' as msg , true as results, value_open as value, 0 close , 0 card  FROM cierre_cajas WHERE  date_open = curdate();");
        
    }

    public function findAll (){
        $data =  DB::select("if (EXISTS (SELECT 1 FROM cierre_cajas where date_open = curdate()))
        then  
                SELECT * FROM mipos.cierre_cajas where date_open = curdate();
         
        else   
                SELECT  1  id, curdate() date_open,DATE_FORMAT(NOW(), \"%H:%i\" )  hour_open,  0 value_previous_close,   null value_open, '' observation;
        end if;");// podia hacer un sp, de hecho lo hice, pero para rapidez de la revision le deje la consulta.


        return [
            'status' =>   "Success",  
            'id' =>  $data[0]->id,
            'results' =>   [
                'date_open' =>              $data[0]->date_open,
                'hour_open' =>              $data[0]->hour_open,
                'value_previous_close' =>   $data[0]->value_previous_close,
                'value_open' =>             $data[0]->value_open,
                'observation' =>            $data[0]->observation 
            ]
        ];
    }

    public function create (Request $request){
      
        $data = CierreCajas::create($request->all());
 
        return [
            "msg" => "Información guardada con éxito",
            'results' =>   [
                'date_open' =>              $data->date_open,
                'hour_open' =>              $data->hour_open,
                'value_previous_close' =>   $data->value_previous_close,
                'value_open' =>             $data->value_open,
                'observation' =>            $data->observation 
            ]
        ];
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entities\CierreCajas  $cierreCajas
     * @return \Illuminate\Http\Response
     */
    public function show(CierreCajas $cierreCajas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entities\CierreCajas  $cierreCajas
     * @return \Illuminate\Http\Response
     */
    public function edit(CierreCajas $cierreCajas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entities\CierreCajas  $cierreCajas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CierreCajas $cierreCajas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entities\CierreCajas  $cierreCajas
     * @return \Illuminate\Http\Response
     */
    public function destroy(CierreCajas $cierreCajas)
    {
        //
    }
}
