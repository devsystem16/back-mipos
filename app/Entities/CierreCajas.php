<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class CierreCajas extends Model
{
    protected $table = 'cierre_cajas'; 
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = false;
    protected $fillable = [ 'date_open', 'hour_open','value_previous_close','value_open','observation'];

}
