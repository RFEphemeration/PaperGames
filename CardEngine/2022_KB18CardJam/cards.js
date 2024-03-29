
let cards_data = {
	skeleton : {
		kind : 'monster',
		name : 'Skeleton',
		image : 'images/skeleton.jpg',
		stats : [3,1],
		rules : trigger('while this is on top of the discard pile',// keyword('destroyed')],
				'any player may play this monster'),
	},
	demon_wisp : {
		kind : 'monster',
		name : 'Demon Wisp',
		image : 'images/demon_wisp.jpg',
		stats: [2,1],
		rules : trigger(['when this is destroyed'],
			['deal 2 damage to any monster or opponent']),
	},
	prepared_counter : {
		kind: 'aura',
		name: 'Prepared Counter',
		image : 'images/prepared_counter.jpg',
		rules : trigger([keyword('trap'), ' ', keyword('once')], 'a card being played is instead discarded'),
	},
	saving_grace : {
		kind: 'aura',
		name: 'Saving Grace',
		image : 'images/block.jpg',
		rules : [
			trigger(
				[keyword('trap'), ' ', keyword('twice')],
				'prevent a monster or aura from being destroyed'),
		],
	},
	chain_lightning : {
		kind: 'spell',
		name: 'Chain Lightning',
		image: 'images/chain_lightning.jpg',
		rules: 'deal 2 damage divided between any monsters and opponent',
	},
	mind_palace : {
		kind: 'aura',
		name: 'Mind Palace',
		image: 'images/mind_palace.jpg',
		rules: trigger('modify draw action', 'draw an exta card, then discard a card'),
	},
	aggressive_tactics : {
		kind: 'aura',
		name: 'Aggressive Tactics',
		image: 'images/aggressive_tactics.jpg',
		rules: [
			trigger('modify attack action', 'you may attack with an extra monster'),
		],
	},
	empty_the_armory : {
		kind: 'aura',
		name: 'Empty the Armory',
		image: 'images/empty_the_armory.jpg',
		rules: [
			trigger(keyword('trap'), 'your monsters gain +1/+0'),
		],
	},
	seeing_stone : {
		kind: 'spell',
		name: 'Seeing Stone',
		image: 'images/seeing_stone.jpg',
		rules: "look at opponent's hand, they discard a card of your choice",
	},
	blunting_rampager : {
		kind: 'monster',
		name: 'Blunting Rampager',
		image: 'images/blunting_rampager.jpg',
		stats: [1, 3],
		rules: trigger('when this monster damages opponent',
			"opponent's next action cannot be draw, unless they have no cards in hand")
	},
	furious_rummaging : {
		kind: 'aura',
		name: 'Furious Rummaging',
		image: 'images/furious_rummaging.jpg',
		rules: [
			trigger('play cost', 'discard a card'),
			trigger('modify draw action', 'if your hand is empty, draw an extra card'),
		],
	},
	false_god : {
		kind: 'monster',
		name: 'False God',
		image: 'images/false_god.jpg',
		stats: [5, 6],
		rules: trigger('play cost', 'sacrifice a monster'),
	},
	spirit_of_vengeance : {
		kind: 'monster',
		name: 'Spirit of Vengeance',
		image: 'images/spirit_of_vengeance.jpg',
		stats: [1, 2],
		rules: trigger('when you sacrifice a card', 'deal 1 damage to any monster or opponent'),
	},
}

let card_mode_pairs = [
	['skeleton', 'empty_the_armory'],
	['mind_palace', 'chain_lightning'],
	['demon_wisp', 'prepared_counter'],
	['seeing_stone', 'aggressive_tactics'],
	['saving_grace', 'blunting_rampager'],

]


let data_root = "./2022_KB18CardJam/";

make_set(data_root, cards_data, card_mode_pairs);

