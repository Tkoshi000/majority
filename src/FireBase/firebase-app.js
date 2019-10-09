//参考　https://qiita.com/Yatima/items/f76c9af0cc43a45d0e6e

setDBMessageAction (newValue, destination) {
    if (this.debug) console.log('setDBMessageAction triggered with', newValue)
    let sets = {}
    sets['/one/path/to/' + destination] = newValue
    sets['/another/path/to/' + destination] = newValue
    db.ref().set(sets)
  }