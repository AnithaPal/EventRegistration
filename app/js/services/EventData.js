
eventsApp.factory('eventData', function(){
	return{
		event: {
			name: "Angular Boot Camp",
			date: 1359781015626,
			time: "10:30 am",
			location: {
			address: "Google Headquarters",
			city: "Mountain View",
			province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directive Masterclass',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Advanced',
						abstract: 'In this lession you ll learn ins and outs of  directives',
				upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: 2,
					level: 'Introductory',
					abstract: 'This session we ll take closer look at scopes. Learn what do they do, how do they do',
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Controllers are beginning of everything in Angular',
					upVoteCount: 0
				}
			]
		}
		
	};
})