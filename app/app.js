var app = angular.module('winitApp', []);
app.controller('winitCtrl', function($scope) {
    var winits = [
    	{
    		id:1, 
    		photo:"https://cdnb.lystit.com/photos/1678-2015/11/04/gucci-us-beigeblue-gg-supreme-childrens-gg-supreme-backpack-beige-product-4-168315478-normal.jpeg", 
    		filled:"40% Full in 3 Days", 
    		title:"Olivia-Burton Women Watch"
    	},
    	{
    		id:2, 
    		photo:"http://images.bigcartel.com/product_images/122941467/fin_pegleg_brd2.jpg?auto=format&fit=max&h=1000&w=1000", 
    		filled:"80% Full in 2 Days", 
    		title:"Super-Cool Fast Skateboard"
    	},
    	{
    		id:3, 
    		photo:"http://i01.i.aliimg.com/wsphoto/v0/581102529_1/New-Vintage-Fashion-Gear-Handmade-Genuine-Leather-Strap-Watches-Disc-Diamond-Women-s-Wristband-Watch-Free.jpg", 
    		filled:"45% Full in 8 Days", 
    		title:"Most-Expensive Watch Ever"
    	},
    	{
    		id:4, 
    		photo:"https://cdnb.lystit.com/photos/1678-2015/11/04/gucci-us-beigeblue-gg-supreme-childrens-gg-supreme-backpack-beige-product-4-168315478-normal.jpeg", 
    		filled:"40% Full in 3 Days", 
    		title:"Olivia-Burton Women Watch"
    	},
    ];

    $scope.winits = winits;

    // ModalService.showModal({

    // })

});
