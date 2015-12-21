materialAdmin
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");


        $stateProvider

        //------------------------------
        // HOME
        //------------------------------

            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'vendors/bower_components/fullcalendar/dist/fullcalendar.min.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                insertBefore: '#app-level-js',
                                files: [
                                    'vendors/sparklines/jquery.sparkline.min.js',
                                    'vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                                    'vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            //------------------------------
            // PAGES
            //------------------------------

            .state('pages', {
                url: '/pages',
                templateUrl: 'views/common.html'
            })


            //Profile

            .state('pages.profile', {
                url: '/profile',
                templateUrl: 'views/profile.html',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'images-resizer',
                            files: ['vendors/imageresize/imageresize.js']
                        },
                            {
                                name: 'flow',
                                files: ['vendors/ngFlow/ng-flow-standalone.js']
                            }])
                    }
                }
            })

            .state('pages.profile.profile-about', {
                url: '/profile-about',
                templateUrl: 'views/profile-about.html'
            })


            // Polls

            .state('pages.poll', {
                url: '/poll',
                templateUrl: 'views/poll.html'
            })

            .state('pages.poll.poll-create-new', {
                url: '/poll-create-new',
                templateUrl: 'views/poll-create-new.html',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([])
                    }
                }
            })

            .state('pages.poll.poll-view-specific', {
                url: '/poll-view-specific',
                templateUrl: 'views/poll-view-specific.html',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([])
                    }
                }
            })

            .state('pages.poll.poll-view-specific.poll-questions', {
                url: '/poll-questions',
                templateUrl: 'views/poll-questions.html',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'vendors',
                            files: [
                                'vendors/input-mask/input-mask.min.js',
                                'bower_components/angular-input-masks/angular-input-masks-standalone.min.js'
                            ]
                        }])
                    }
                }
            })

            .state('pages.poll.poll-view-specific.poll-results', {
                url: '/poll-results',
                templateUrl: 'views/poll-results.html',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([])
                    }
                }
            })

    });
