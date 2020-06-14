<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCierreCajasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cierre_cajas', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date_open');
            $table->string('hour_open');
            $table->integer('value_previous_close');
            $table->integer('value_open');
            $table->string('observation')->nullable();;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cierre_cajas');
    }
}
