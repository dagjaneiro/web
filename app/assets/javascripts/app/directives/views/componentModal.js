import template from '%/directives/component-modal.pug';

export class ComponentModal {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.scope = {
      show: '=',
      component: '=',
      callback: '=',
      onDismiss: '&'
    };
  }

  link($scope, el, attrs) {
    $scope.el = el;
  }

  controller($scope, $timeout, componentManager) {
    'ngInject';

    $scope.dismiss = function(callback) {
      $scope.el.remove();
      $scope.$destroy();
      $scope.onDismiss &&
        $scope.onDismiss() &&
        $scope.onDismiss()($scope.component);
      callback && callback();
    };
  }
}
