<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class CierreDia extends Model
{
 
    protected $table = 'cierre_dias'; 
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = false;
    protected $fillable = [ 'date_close', 'hour_close','value_card','value_cash','value_close' ,'value_open','value_sales'];
}
