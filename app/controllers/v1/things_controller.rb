class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'thing1',
        guild: 'This is thing 1'
      }
    ] }.to_json
  end
end
