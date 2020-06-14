<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCierreDiasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cierre_dias', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date_close');
            $table->string('hour_close');
            $table->integer('value_card');
            $table->integer('value_cash');
            $table->integer('value_close')->nullable();;
            $table->integer('value_open')->nullable();;
            $table->integer('value_sales')->nullable();;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cierre_dias');
    }
}
