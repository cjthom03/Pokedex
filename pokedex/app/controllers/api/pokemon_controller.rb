class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
    render :show
  end

  def create

  end









end
