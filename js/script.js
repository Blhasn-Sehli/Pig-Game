var items=JSON.parse(localStorage.getItem("item"))
console.log(items);
$("#player--1").text(items[0])
$("#player--2").text(items[1])


function PigGame() {
    var instance={}
    instance.cuurentPlayer=1
    instance.cuurentScore1=0
    instance.cuurentScore2=0
    instance.scorePlayer1=0
    instance.scorePlayer2=0
    instance.roll=roll
    instance.hold=hold
    instance.dice=undefined
    instance.resetGame=resetGame
    instance.bound=100
    instance.valid=valid
    return instance
}

var valid=function valid() {
    return this.scorePlayer1<this.bound&&this.scorePlayer2<this.bound 
}
var roll=function roll(newScore) {
    if(this.valid()){
        if(newScore!==1){
            if(this.cuurentPlayer===1){
                this.cuurentScore1+=newScore
            }else{
                this.cuurentScore2+=newScore
            }
        }else{
            if(this.cuurentPlayer===1){
                this.cuurentScore1=0
                this.cuurentPlayer=2
            }else{
                this.cuurentScore2=0
                this.cuurentPlayer=1

            }
        }

    }
    
}
var hold=function hold() {
    if(this.valid()){
            if(this.cuurentPlayer===1){
                this.scorePlayer1+=this.cuurentScore1
                this.cuurentScore1=0
                this.cuurentPlayer=2
            }else{
                this.scorePlayer2+=this.cuurentScore2
                this.cuurentScore2=0
                this.cuurentPlayer=1

            }
    }
    
}
var resetGame=function resetGame() {
    this.scorePlayer1=0
    this.scorePlayer2=0
    this.cuurentScore1=0
    this.cuurentScore2=0
    this.cuurentPlayer=1
}
var  random= function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

var game=PigGame()



$(".new--game").click(function () {
game.resetGame()
$(location).attr("href","index.html")

})
$(".roll--dice").click(function () {
    var dice=random(1,6)
    game.dice=dice
    $("img").show()
    $("img").prop("src",`../images/pig${dice}.png`)
    game.roll(dice)
    $("#current1").text(game.cuurentScore1)
    $("#current2").text(game.cuurentScore2)
    if(game.dice===1){
        if(game.cuurentPlayer===1){
            $(".player--2").toggleClass("player--active",false)
            $(".player--1").toggleClass("player--active",true)
        }else{
            $(".player--2").toggleClass("player--active",true)
            $(".player--1").toggleClass("player--active",false)
        }
    }
    

})
$(".hold--dice").click(function () {
    game.hold()
    $("#current1").text(game.cuurentScore1)
    $("#current2").text(game.cuurentScore2)
    $(".score1").text(game.scorePlayer1)
    $(".score2").text(game.scorePlayer2)
        if(game.cuurentPlayer===1){
            $(".player--2").toggleClass("player--active",false)
            $(".player--1").toggleClass("player--active",true)
        }else{
            $(".player--2").toggleClass("player--active",true)
            $(".player--1").toggleClass("player--active",false)
        }
})
$('.btn').click(function () {
    if(!game.valid()){       
        if(game.cuurentPlayer===1){
            $(".player--2").css("background-color","#73BBC9")
        }else{
            $(".player--1").css("background-color","#73BBC9")
        }
        $("button:not(.new--game)").prop("disabled",true)
    }
})
