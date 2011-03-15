sys = require('sys')

oldrandom = Math.random

class Unrandom
  constructor: (@buffer) ->
    @buffer ||= []
    @history = []
    
  random: =>  
    num = @buffer.shift() || oldrandom()
    @history.push(num)
    return num
  
exports.Unrandom = Unrandom