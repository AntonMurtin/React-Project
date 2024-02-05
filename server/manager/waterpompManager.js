const Waterpomp = require('../models/Waterpomps');

exports.create = (cardData) => Waterpomp.create(cardData);

exports.getAll = () => Waterpomp.find();

exports.getById = (cardId) => Waterpomp.findById(cardId);

exports.update = (cardId, cardData) => Waterpomp.findByIdAndUpdate(cardId, cardData);

exports.delete = (cardId) => Waterpomp.findByIdAndDelete(cardId);

exports.searchName = (searchName) => Waterpomp.find({title:{$regex: searchName, $options: 'i'}});

exports.searchFavorite = (userId) => Waterpomp.find({favorite:{$elemMatch:{_id:userId}}});

exports.searchBuy = (userId) => Waterpomp.find({buy:{$elemMatch:{_id:userId}}});

exports.searchLastSeen = (userId) => Waterpomp.find({lastSeen:{$elemMatch:{_id:userId}}});
