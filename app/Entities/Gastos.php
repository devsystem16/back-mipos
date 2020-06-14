<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Gastos extends Model
{
    protected $table = 'gastos'; 
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = false;
    protected $fillable = [ 'descripcion', 'valor' , 'id_cierre_caja'];

}
