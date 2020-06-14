<?php

namespace App\Http\Controllers;

use App\Entities\CierreDia;
use Illuminate\Http\Request;
use App\Entities\Gastos;
class CierreDiaController extends Controller
{

 
    public function create (Request $request){
  
        $res = CierreDia::create($request->all());
       
        $expenses = $request->expenses;
        $gastos = [];
        

        foreach ($expenses as $key => $value) {
            $obj =  [ "id_cierre_caja" => $res->id,  "descripcion" => $value['name']   , "valor" =>   intval( $value['value'] )*100  ];
            array_push( $gastos , $obj);
        }

        Gastos::insert(  $gastos );  

 
        return    [ "msg" => "Información guardada con éxito",
                     "results" =>$res
                  ] ;



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
     * @param  \App\Entities\CierreDia  $cierreDia
     * @return \Illuminate\Http\Response
     */
    public function show(CierreDia $cierreDia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entities\CierreDia  $cierreDia
     * @return \Illuminate\Http\Response
     */
    public function edit(CierreDia $cierreDia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entities\CierreDia  $cierreDia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CierreDia $cierreDia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entities\CierreDia  $cierreDia
     * @return \Illuminate\Http\Response
     */
    public function destroy(CierreDia $cierreDia)
    {
        //
    }
}
