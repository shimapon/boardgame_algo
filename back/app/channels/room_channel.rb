class RoomChannel < ApplicationCable::Channel

  def subscribed
    stream_from "room_channel_#{params[:id]}"
    logger.info 'room:接続した'
  end

  def unsubscribed
    logger.info 'room:接続切れた'
    Room.find_by(id: params[:id]).destroy
  end

  # ゲーム中はフロントからのメッセージをそのまま送る，横流し
  def handle_game(data)
    order = data["message"][0]
    user = data["message"][1]
    card = data["message"][2]

    ActionCable.server.broadcast("room_channel_#{params[:id]}", [order, user, card])
  end
end
