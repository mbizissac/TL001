// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        card: cc.Prefab,
        cardList : null,
        allPlayerCard:[], 
        idNguoiChoi:0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    TraoBai(){
        const _cardlist = [];
        
        // Bo bai 52 la
        for (let i = 1; i < 5; i++) {
            for (let j = 0; j < 13; j++) {
                _cardlist.push(i*100+j);
            }
        }

        this.cardList = _cardlist;

        // chia bai
        let SoNguoiChoi = 4;
        let Nguoi10Con = 0;
        for (let m = 0; m < SoNguoiChoi; m++) {
            this.allPlayerCard[m] = [];
            for (let m1 = 0; m1 < 10; m1++) {
                let socardconlai = this.cardList.length;
                let randomx = Math.floor(Math.random() * socardconlai);
                if(m != Nguoi10Con){
                    if(m1 < 9){
                        this.allPlayerCard[m].push(this.cardList[randomx])
                        this.cardList.splice(randomx,1);
                    }
                }else{
                    this.allPlayerCard[m].push(this.cardList[randomx])
                    this.cardList.splice(randomx,1);
                }
            }
            
        }
        console.log(this.allPlayerCard);
        console.log(this.cardList);
        this.ChiaBai();

    },
    ChiaBai(){
        var CardTable = this.node.getChildByName("CardTable");
        // xóa hết bài trên bàn
        for (let i = 0; i < 8; i++) {
            var playerx = CardTable.children[i];
            playerx.removeAllChildren(true);
        }
        //chia bai
        for (let i = 0; i < 4; i++) {
            var playerx = CardTable.children[i*2];

            var cardOf1Player = this.allPlayerCard[i];
            for (let j = 0; j < cardOf1Player.length; j++) {
                var posix = player0123[i].posiCard[0];
                var posiy = player0123[i].posiCard[1];
    
                var cardpf = cc.instantiate(this.card);
                cardpf.setPosition(posix, posiy)
                cardpf.getComponent("card").VeLaBai(this.allPlayerCard[i][j],j,i );
                playerx.addChild(cardpf);
                
            }



        }
    }

    // update (dt) {},
});
