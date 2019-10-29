require 'mail'
class Api::V1::EmailsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Email.all
  end

  def create
    email = (email_params[:email])
    if (email =~ Devise.email_regexp) != nil
      new_email = Email.create(email: email)
    end
  end

  def email_params
    params.permit(:email)
  end

end
