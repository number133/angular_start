angular.module('app', [])
    .controller('HeaderController', ['$scope', function HeaderController($scope) {
        $scope.appDetails = {
			title: "BooKart",
			tagline: "We have 1 million books for you"
		};
	}])
	.controller('BookListController', ['$scope', function BookListController($scope) {
        $scope.books = [
        	{
        		imgUrl: "adultery.jpeg",
        		name: "Adultery",
        		price: 205,
        		rating: 4,
        		binding: "Paperback",
        		publisher: "Random House India",
        		releaseDate: "12-08-2014",
        		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto veritatis perferendis excepturi reiciendis nam vitae perspiciatis assumenda doloremque deleniti totam corrupti sequi, rerum maxime harum maiores inventore atque, in at."
        	},
        	{
        		imgUrl: "geronimo.jpeg",
        		name: "Geronimo Stilton Spacemice",
        		price: 168,
        		rating: 5,
        		binding: "Paperback",
        		publisher: "Scholastic",
        		releaseDate: "01-07-2014",
        		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, minima delectus esse ex assumenda ipsam, alias tenetur ut, adipisci sunt illum officiis dolorum recusandae sit fuga et eligendi reiciendis repellat."
        	},
        	{
        		imgUrl: "life-or-death.jpeg",
        		name: "Life or Death",
        		price: 339,
        		rating: 4,
        		binding: "Paperback",
        		publisher: "Hachette India",
        		releaseDate: "01-04-2014",
        		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, tenetur officia dolore dicta libero aspernatur veritatis reprehenderit! Qui, voluptatum! Dolores mollitia quos repellendus quo, natus sit hic, ea voluptatem est."
        	},
        	{
        		imgUrl: "playing.jpeg",
        		name: "Playing It My Way",
        		price: 599,
        		rating: 5,
        		binding: "Hardcover",
        		publisher: "Hodder & Stoughton",
        		releaseDate: "01-08-2014",
        		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, tenetur officia dolore dicta libero aspernatur veritatis reprehenderit! Qui, voluptatum! Dolores mollitia quos repellendus quo, natus sit hic, ea voluptatem est."
        	},
        	{
        		imgUrl: "the-fault.jpeg",
        		name: "The fault in our stars",
        		price: 227,
        		rating: 4.5,
        		binding: "Paperback",
        		publisher: "Pebguin Books Ltd",
        		releaseDate: "25-01-2013",
        		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, tenetur officia dolore dicta libero aspernatur veritatis reprehenderit! Qui, voluptatum! Dolores mollitia quos repellendus quo, natus sit hic, ea voluptatem est."
        	},
        	{
        		imgUrl: "wings-of-fire.jpeg",
        		name: "Wings of Fire: An Autobiography",
        		price: 124,
        		rating: 5,
        		binding: "Paperback",
        		publisher: "Universities Press",
        		releaseDate: "25-08-2000",
        		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed et sunt illum provident placeat fugit doloremque blanditiis itaque inventore magni maxime voluptatibus animi dolorum eius eos ipsa, nostrum accusamus cumque."
        	}
        ];

        $scope.addToKart = function(book){
        	console.log('Book: ' + book);
        }
	}]);