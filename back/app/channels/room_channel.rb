class RoomChannel < ApplicationCable::Channel
  $cards_orig=[[0,false],[1,false],[2,false],[3,false],[4,false],[5,false],
  [6,false],[7,false],[8,false],[9,false],[10,false],[11,false],
  [0,true],[1,true],[2,true],[3,true],[4,true],[5,true],
  [6,true],[7,true],[8,true],[9,true],[10,true],[11,true]
]

$cards=[[0,false],[1,false],[2,false],[3,false],[4,false],[5,false],
[6,false],[7,false],[8,false],[9,false],[10,false],[11,false],
  [0,true],[1,true],[2,true],[3,true],[4,true],[5,true],
  [6,true],[7,true],[8,true],[9,true],[10,true],[11,true]
]
  $cards_p1=[]
  $cards_p2=[]
  $cards_p3=[]

  $player1_in=false
  $player2_in=false
  $player3_in=false

  $num_player=0


  def subscribed
    stream_from "room_channel"
    logger.info 'room:接続した'
    #first_regis()
  end

  def unsubscribed
    logger.info 'room:接続切れた'
    $cards=$cards_orig
    $cards_p1=[]
    $cards_p2=[]
    $cards_p3=[]
  
    $player1_in=false
    $player2_in=false
    $player3_in=false

    $num_player=0
  end

  # ゲーム中はフロントからのメッセージをそのまま送る，横流し
  def handle_click(data)
    order = data["message"][0]
    user = data["message"][1]
    card = data["message"][2]

    ActionCable.server.broadcast("room_channel", [order, user, card])
  end

  # ゲーム中はフロントからのメッセージをそのまま送る，横流し
  def first_regis(data)
    card = $cards.shuffle
    tmp_card=[]
    tmp_card.push(card.pop)
    tmp_card.push(card.pop)
    tmp_card.push(card.pop)

    if (tmp_card[0][0]>tmp_card[1][0]) || (tmp_card[0][0]==tmp_card[1][0] && tmp_card[1][1]==false)
      tmp=tmp_card[0]
      tmp_card[0]=tmp_card[1]
      tmp_card[1]=tmp
    end

    if (tmp_card[1][0]>tmp_card[2][0]) || (tmp_card[1][0]==tmp_card[2][0] && tmp_card[2][1]==false)
      tmp=tmp_card[1]
      tmp_card[1]=tmp_card[2]
      tmp_card[2]=tmp
    end

    if (tmp_card[0][0]>tmp_card[1][0]) || (tmp_card[0][0]==tmp_card[1][0] && tmp_card[1][1]==false)
      tmp=tmp_card[0]
      tmp_card[0]=tmp_card[1]
      tmp_card[1]=tmp
    end

    if $num_player==0
      $cards_p1=tmp_card

      $num_player+=1
    elsif $num_player==1
      $cards_p2=tmp_card

      $num_player+=1
    elsif $num_player==2
      $cards_p3=tmp_card

      $num_player+=1
    end

    $cards=card

    ActionCable.server.broadcast("room_channel", [3,[$cards_p1,$cards_p2,$cards_p3],$cards])
  end
end
