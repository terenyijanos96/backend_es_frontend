<?php

namespace App\Http\Controllers;

use App\Models\Poet;
use Illuminate\Http\Request;

class PoetController extends Controller
{

    public function index(){
        return response()->json(Poet::all());
    }

    public function show($id){
        return response()->json(Poet::find($id));
    }

    public function store(Request $request){
        $poet = new Poet();
        $poet->name = $request->name;
        $poet->birth_year = $request->birth_year;
        $poet->save();
    }

    public function update(Request $request, $id){
        $poet = Poet::find($id);
        $poet->name = $request->name;
        $poet->birth_year = $request->birth_year;
        $poet->save();
    }

    public function destroy($id){
        Poet::find($id)->delete();
    }

}
