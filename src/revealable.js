
angular.module( "revealable", [] )

.directive( "revealable", [ "$compile", function ( $compile )
    {
        "use strict";

        return {
            restrict: "A",
            require: "ngModel",
            link: function ( scope, element, attrs, ngModel )
            {
                var innerScope = scope.$new();

                innerScope.model = ngModel;
                innerScope.revealed = false;
                innerScope.toggleReveal = function ()
                {
                    innerScope.revealed = !innerScope.revealed;
                };

                var template = '<div class="fa fa-eye v-revealable" ng-if="model.$viewValue"'
                    + ' ng-click="toggleReveal()" ng-class="{ \'active\': revealed }"></div>'
                    + '<div class="v-revealed" ng-if="revealed" ng-bind="model.$viewValue"></div>';
                var revealControl = $compile( angular.element( template ) )( innerScope );
                element.after( revealControl );
            }
        };
    }
] );