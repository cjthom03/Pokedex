
json.array! @guests.each do |guest|
  json.partial! 'guest', guest: guest if guest.age.between?(40,50)
end
