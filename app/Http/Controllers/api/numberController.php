<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class numberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return 'Hello';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        if(!isset($request->all()['value'])){
            return json_encode(array('status' => 'fail', 'value' => 'please enter a value')); 
        }
        // return $request->all();
        $romans = array(
            'M' => 1000,
            'CM' => 900,
            'D' => 500,
            'CD' => 400,
            'C' => 100,
            'XC' => 90,
            'L' => 50,
            'XL' => 40,
            'X' => 10,
            'IX' => 9,
            'V' => 5,
            'IV' => 4,
            'I' => 1,
        );
        
        $roman = $request->all()['value'];
        $result = 0;
        
        foreach ($romans as $key => $value) {
            while (strpos($roman, $key) === 0) {
                $result += $value;
                $roman = substr($roman, strlen($key));
            }
        }
        return json_encode(array('status' => 'success', 'value' => $result));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
