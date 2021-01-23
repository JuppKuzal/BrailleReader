<template>
    <div
    id="app"
    tabindex="0"
    style="outline: none;"
    @keyup="acceptInput()">
        <v-container
        style="max-height:70%;"
        >
            <v-row
            dense
            justify="center"
            align="center">
                <v-col>
                    <v-container>
                        <v-row
                        v-for="n in 3"
                        :key="n"
                        >
                            <v-col
                            xl="6"
                            lg="6"
                            md="6"
                            sm="6"
                            xs="6"
                            v-for="m in 2"
                            :key="m"
                            >
                                <v-card
                                class="pa-2 my-2"
                                outlined
                                tile
                                :id="n.toString()+m.toString()"
                                ref="card"
                                :color="darkmode ? '#404040' : ''"
                                >
                                    <v-responsive :aspect-ratio="1/0.7">
                                        <v-card-title
                                        class="text-h1 justify-center mt-12">
                                            <div :class="darkmode ? 'whiteText' : 'darkText'">
                                            .
                                            </div>
                                        </v-card-title>
                                    </v-responsive>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col>
                    <span class="text-h5 my-2 ml-12">
                        {{this.word}}
                    </span>
                    <span v-bind:class="['text-h5 flow-left', darkmode? 'whiteTextDisabled' : 'text--disabled']">
                        {{this.letter}}
                    </span>
                    <div class="text-h6 my-6 ml-12">
                        {{this.text}}
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: "Application",

    data () {
        return {
            tempArray: [],
            letter: '',
            word: '',
            text: '',
            isUpperCaseLetter: false,
            isUpperCaseWord: false,
            isLowerCaseLetter: false,
            isNumber: false,
            translationMap: new Map([
                [7, 'a'],
                [47, 'b'],
                [78, 'c'],
                [578, 'd'],
                [57, 'e'],
                [478, 'f'],
                [4578, 'g'],
                [457, 'h'],
                [48, 'i'],
                [458, 'j'],
                [17, 'k'],
                [147, 'l'],
                [178, 'm'],
                [1578, 'n'],
                [157, 'o'],
                [1478, 'p'],
                [14578, 'q'],
                [1457, 'r'],
                [148, 's'],
                [1458, 't'],
                [127, 'u'],
                [1247, 'v'],
                [12457, 'w'],
                [1278, 'x'],
                [12578, 'y'],
                [1257, 'z'],

                [27, 'á'],
                [278, 'č'],
                [2578, 'ď'],
                [158, 'é'],
                [247, 'ě'],
                [18, 'í'],
                [2478, 'ň'],
                [248, 'ó'],
                [2458, 'ř'],
                [257, 'š'],
                [2457, 'ť'],
                [128, 'ú'],
                [12458, 'ů'],
                [12478, 'ý'],
                [1248, 'ž'],

                [15, '*'],
                [1, '.'],
                [4, ','],
                [145, '!'],
                [24, '?'],
                [45, ':'],
                [14, ';'],
                [124, '('],
                [125, ')'],
                [245, '+'],
                [12, '-'],
                [1245, '"'],
                [247, '<'],
                [158, '>'],
                [1245, '='],
                [14578, '/'],
                [258, '|'],
                [8, "'"],
            ]),
            translationMapNums: new Map([
                [7, 1],
                [47, 2],
                [78, 3],
                [578, 4],
                [57, 5],
                [478, 6],
                [4578, 7],
                [457, 8],
                [48, 9],
                [458, 0],
            ])
        }
    },
    computed: {
        darkmode () {
            return this.$store.state.darkmode
        }
    },
    methods: {
        acceptInput () {
            var card;

            switch(event.keyCode) {
                case 103:
                    card = document.getElementById('11')
                    this.changeArray(card, 7)
                    this.changeCardColor(card);
                    break;
                case 104:
                    card = document.getElementById('12')
                    this.changeArray(card, 8)
                    this.changeCardColor(card);
                    break;
                case 100:
                    card = document.getElementById('21')
                    this.changeArray(card, 4)
                    this.changeCardColor(card);
                    break;
                case 101:
                    card = document.getElementById('22')
                    this.changeArray(card, 5)
                    this.changeCardColor(card);
                    break;
                case 97:
                    card = document.getElementById('31')
                    this.changeArray(card, 1)
                    this.changeCardColor(card);
                    break;
                case 98:
                    card = document.getElementById('32')
                    this.changeArray(card, 2)
                    this.changeCardColor(card);
                    break;
                case 32:
                    if(!this.tempArray.length) {
                        //close word
                        this.text+=this.word+' '
                        this.word = ''

                        this.isNumber = false
                        this.isUpperCaseWord = false
                    } else {
                        //close letter
                        this.word+=this.letter
                        this.letter = ''
                        this.tempArray = []
                    }
                    this.resetCardColors();
                    break;
                default:
                    console.log('Please press an appropriate key')
            }
            this.translate()
        },
        changeArray(card, val) {
            if(card.style.backgroundColor!='rgb(92, 184, 92)'){
                this.tempArray.push(val)
            } else {
                this.tempArray = this.tempArray.filter(value => value !== val)
            }
        },
        changeCardColor(card) {
            if(this.darkmode) {
                if(card.style.backgroundColor!='rgb(92, 184, 92)'){
                    card.style.backgroundColor='rgb(92, 184, 92)'
                } else {
                    card.style.backgroundColor='rgb(64,64,64)'
                }
            } else {
                if(card.style.backgroundColor!='rgb(92, 184, 92)'){
                    card.style.backgroundColor='rgb(92, 184, 92)'
                } else {
                    card.style.backgroundColor='rgb(255, 255, 255)'
                }
            }
        },
        translate () {
            if(this.tempArray.length) {
                var key = this.tempArray.sort((a,b) => {
                    return a-b;
                }).join("")

                switch(parseInt(key)) {
                    case 5:
                        this.isLowerCaseLetter = true
                        this.isUpperCaseLetter = false
                        this.isUpperCaseWord = false
                        break;
                    case 1258:
                        this.isNumber = true
                        break;
                    case 2:
                        this.isUpperCaseLetter = true
                        break;
                    case 58:
                        this.isUpperCaseWord = true
                        break;
                    default:
                        if(this.isNumber == true) {
                            this.letter = this.translationMapNums.get(parseInt(key)) != undefined ? this.translationMapNums.get(parseInt(key)).toString() : '?'
                        } else {
                            if(this.isUpperCaseLetter || this.isUpperCaseWord) {
                                this.letter = this.translationMap.get(parseInt(key)) != undefined ? this.translationMap.get(parseInt(key)).toString().toUpperCase() : '?'
                            } else {
                                this.letter = this.translationMap.get(parseInt(key)) != undefined ? this.translationMap.get(parseInt(key)).toString() : '?'
                            }
                        }
                    console.log(this.isUpperCaseLetter)
                    this.isUpperCaseLetter = false
                    console.log(this.letter)
                    }
                
            } else {
                console.log('')
            }
            
        },
        resetCardColors () {

            if(this.darkmode) {
                    document.getElementById('11').style.backgroundColor='rgb(64,64,64)'
                    document.getElementById('12').style.backgroundColor='rgb(64,64,64)'
                    document.getElementById('21').style.backgroundColor='rgb(64,64,64)'
                    document.getElementById('22').style.backgroundColor='rgb(64,64,64)'
                    document.getElementById('31').style.backgroundColor='rgb(64,64,64)'
                    document.getElementById('32').style.backgroundColor='rgb(64,64,64)'
            } else {
                    document.getElementById('11').style.backgroundColor='rgb(255, 255, 255)'
                    document.getElementById('12').style.backgroundColor='rgb(255, 255, 255)'
                    document.getElementById('21').style.backgroundColor='rgb(255, 255, 255)'
                    document.getElementById('22').style.backgroundColor='rgb(255, 255, 255)'
                    document.getElementById('31').style.backgroundColor='rgb(255, 255, 255)'
                    document.getElementById('32').style.backgroundColor='rgb(255, 255, 255)'
            }
        }
    },
}
</script>
<style scoped>
    .flowleft {
        animation: move 0.5s ease-out;
        animation-delay: 100ms;
        transform: translateX(100%);
    }
    .whiteText {
        color: white;
    }
    .whiteTextDisabled {
        color: #525252;
    }
    .darkText {
        color: black;
    }

    @keyframes move {
        0% {
            transform: translateX(0px);
        }
        100% {
            transform: translateX(100px);
        }
    }
</style>