<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TABLE extends Model
{
    protected $table = 'TABLE';
    protected $primaryKey = 'PRIMARY_KEY';
    protected $fillable = ['FIELDS'];
}