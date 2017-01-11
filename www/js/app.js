// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('App', ['ionic', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tabs', {
    url: '/tabs',
    abstract: true,
    templateUrl: 'views/tabs/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tabs.body', {
    url: '/health/body',
    views: {
      'body-tab': {
        templateUrl: 'views/health/body/records.html'
      }
    }
  })
  .state('tabs.forum', {
      url: '/forum',
      views: {
        'forum-tab': {
          templateUrl: 'views/forum/forum.html',
          controller: 'ForumController'
        }
      }
  })
  .state('tabs.mind', {
    url: '/health/mind',
    views: {
      'mind-tab': {
        templateUrl: 'views/health/mind/records.html'
      }
    }
  })
  .state('tabs.more', {
    url: '/more',
    views: {
      'more-tab': {
        templateUrl: 'views/more/more.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/health/body');

})
.factory('Forums', function() {
  return [
        {
            'id': 1,
            'title': 'How to lose weight?',
            'forum': "I've been looking for a safe way to lose some pounds. Help please.",
            'user': 'Cassius Winston',
            'pic': 'img/mike.png',
            'showReplies': false,
            'replies': [
              {
                'id': 1,
                'content': 'Eat less, exercise more.',
                'user': 'Mile Bridges'
              },
              {
                'id': 2,
                'content': 'Do not stay late at night.',
                'user': 'Nick Ward'
              }
            ]
        },
        {
            'id': 2,
            'title': 'How to gain weight?',
            'forum': "I've been eating a lot and work out like crazy but nothing seems to work. Help please.",
            'showReplies': false,
            'pic': 'img/max.png',
            'user': 'Tum Tum Nairn'
        },
        {
            'id': 3,
            'title': 'How to recover from office syndrome?',
            'forum': "I'm a programmer who sit for at least 12 hours a day. My back and shoulder are killing me. Help please.",
            'showReplies': false,
            'pic': 'img/ben.png',
            'user': "Le'Veon Bell"
        }
    ]
});
