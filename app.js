<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<div ng-app="myApp" ng-controller="myCtrl">
</div>
var app=angular.module("myApp",[]);
app.controller("myctrl",function($scope)
{
<fieldset>
<label for="name">Biggest District(Area wise)</label><br>
<br>
<br>
<input type="radio" name="district">Chennai
<input type="radio" ng-style="selected" ng-change="selectedStyle={color:'red'} name="district">Coimbatore
<input type="radio" name="district">Salem
</fieldset>
<br>
<br>
<fieldset>
<label for="name">Highly populated District</label><br>
<br>
<br>
<div data-ng-repeat="">
<input type="radio" ng-style="selected" ng-change="selectedStyle={color:'red'} name="district">Chennai
<input type="radio"  name="district">Coimbatore
<input type="radio"  name="district">Salem
</div>
</fieldset>
});
</script>