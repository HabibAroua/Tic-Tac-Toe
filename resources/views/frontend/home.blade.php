@extends('frontend.master')
<div class="container">
    <div class="zone">
        <h1>Tic Tac Toe</h1>
        <form>
            <div>
                <input id="bt1" type="button" value=""  />
                <input id="bt2" type="button" value=""  />
                <input id="bt3" type="button" value=""  />
            </div>
            <div>
                <input id="bt4" type="button" value="" />
                <input id="bt5" type="button" value="" />
                <input id="bt6" type="button" value=""  />
            </div>
            <div>
                <input id="bt7" type="button" value="" />
                <input id="bt8" type="button" value="" />
                <input id="bt9" type="button" value="" />
            </div>
        </form>
        <button id="btConsultLeadboard">Consult leadboard</button>
        <div class="popup" id="popup">
                <h2>Leaderboard</h2>
                <p>
                    Your details has been successfully submitted. Thanks!
                </p>
                <button id="btClose" type="button">
                    OK
                </button>
            </div>
    </div>
</div>
<script src="{{ asset('assets/scripts/models/Game.js') }}"></script>
<script src="{{ asset('assets/scripts/script.js') }}"></script>