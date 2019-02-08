const questions = {
    1: {
        q: '.angular-cli.json is used for ?',
        options: ['a: Used to configure your angular 2 project', 'b: Used to link external files',
            'c: used to install required project packages'],
        a: 'a'
    },
    2: {
        q: 'Which file is responsible for startup of angular 2+ project ?',
        options: ['a: main.ts', 'b: index.js', 'c: app.ts', 'd: angular.cli.json'],
        a: 'a'
    },
    3: {
        q: 'Which of the following is the correct way to apply a filter?',
        options: ['a: -Property-value || filter', 'b: -Property-value && filter', 'c: -Property-value | filter'],
        a: 'c'
    },
    4: {
        q: 'What is the decorator used for configuring your module class?',
        options: ['a: @NgModule', 'b: @NgApp', 'c: @NgAngular', 'd: @NgConfigure'],
        a: 'a'
    },
    5: {
        q: 'Interpolation in angular 2 is done using',
        options: ['a: {{}}', 'b: {{|var}}', 'c: {{{}}}', 'd: !!!!'],
        a: 'a'
    },
    6: {
        q: 'What does AOT stand for?',
        options: ['a: Angular Object Templates', 'b: ahead-of-time compilation', 'c: Angular Open Terminal'],
        a: 'b'
    },
    7: {
        q: 'Angular 2.0 is a ?',
        options: ['a: library', 'b: Framework', 'c: Operating System', 'd: programming Language'],
        a: 'b'
    },
    8: {
        q: 'Which character is used for chaining multiple pipes in Angular ?',
        options: ['a: :','b: -','c: \ ','d: |'],
        a: 'd'
    },
    9: {
        q: 'Which of the following filter is used to convert input to all uppercase?',
        options: ['a: upper', 'b: uppercase', 'c: toUpper', 'd: none of the above'],
        a: 'b'
    },
    10: {
        q: 'Which of the following is not a hook in Angular 2 application life cycle?',
        options: ['a: ngOnChanges', 'b: ngOnInit', 'c: ngAfterViewInit', 'd: ngViewStart'],
        a: 'd'
    },
    11: {
        q: 'Which of the following can be used to run unit tests?',
        options: ['a: Karma', 'b: Protractor'],
        a: 'a'
    },
    12: {
        q: 'Which of the following can be used to run end-to-end tests?',
        options: ['a: Karma', 'b: Protractor'],
        a: 'b'
    },
    13: {
        q: 'Test doubles are needed when writing which of the following?',
        options: ['a: Unit tests', 'b: End-to-end tests'],
        a: 'a'
    },
    14: {
        q: 'Which of the following will need Angular testing utilities for unit testing?',
        options: ['a: Services', 'b: Components', 'c: All the above'],
        a: 'b'
    },
    15: {
        q: 'It is recommended to write isolated unit tests for which of the following?',
        options: ['a: Services', 'b: Pipes', 'c: All the above'],
        a: 'c'
    },
    16: {
        q: 'Which of the following TestBed method is used to create an Angular component under test?',
        options: ['a: createComponent', 'b: createTestingComponent', 'c: configureComponent', 'd: configureTestingComponent'],
        a: 'a'
    },
    17: {
        q: 'If you chain multiple pipes together, they are executed . . . . . ',
        options: ['a: in parallel', 'b: LIFO order', 'c:  in the order in which you specify them', 'd: none of above'],
        a: 'c'
    },
    18: {
        q: 'The pure decorator property is used to tell Angular when to call the pipe’s transform method. The default value for the pure property is . . . . . . ',
        options: ['a: False', 'b: True'],
        a: 'b'
    },
    19: {
        q: 'Which filter waits for a promise and returns the most recent value received & then updates the view.',
        options: ['a: sync', 'b: async', 'c: promise', 'd: custom'],
        a: 'b'
    },
    20: {
        q: 'Which of the following is not built-in pipe in Angular?',
        options: ['a: DatePipe', 'b: CurrencyPipe', 'c: DataPipe', 'd: PercentPipe'],
        a: 'c'
    }
};

module.exports = {
    questions
}