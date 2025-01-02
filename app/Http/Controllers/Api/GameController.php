<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Game;

class GameController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make
        (
            $request->all(), 
            [
                'played_at' => 'required|date', //date is valid for date and timestamp
                'result' => 'required|in:X,O,Draw'
            ]
        );
        if ($validator->fails()) 
        {
            return response()->json
            (
                [
                    "message" => "Bad request",
                    "fields" => $validator->errors(),
                ], 400
            );
        }
        else
        {
            //save the game if the input is valid
            $game = new Game();
            $game->played_at = $request->played_at;
            $game->result=  $request->result;
            $game->save();

            return response()->json
            (
                [
                    'message' => "Inserted",
                    'data' => $game,
                ], 201
            );
        }
    }

    public function getLeadboard()
    {
        $games = Game::orderBy('played_at', 'desc')->get();

        return response()->json
        (
            [
                'message' => "Leadboard list",
                'data' => $games
            ], 200
        );

    }
}
