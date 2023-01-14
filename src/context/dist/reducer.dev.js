"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var courseStep = {
  title: '',
  informations: '',
  question: {}
};
var basicQuestion = {
  question: '',
  answer: '',
  type: 1
};
var checkboxQuestion = {
  question: '',
  answers: [{
    valid: false,
    answer: ''
  }, {
    valid: false,
    answer: ''
  }, {
    valid: false,
    answer: ''
  }, {
    valid: false,
    answer: ''
  }],
  type: 2
};
var initialState = {
  userRole: '',
  coursesList: '',
  createdCourse: {
    name: '',
    description: '',
    steps: []
  }
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  var type = action.type,
      payload = action.payload;
  console.log(state);

  switch (type) {
    case 'EDIT_COURSE_CORE_FIELD':
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, _defineProperty({}, payload.name, payload.value))
      });

    case 'ADD_COURSE_STEP':
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: [].concat(_toConsumableArray(state.createdCourse.steps), [JSON.parse(JSON.stringify(courseStep))])
        })
      });

    case 'EDIT_COURSE_STEP_FIELD':
      var steps = state.createdCourse.steps;
      steps[payload.id][payload.name] = payload.value;
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: _toConsumableArray(steps)
        })
      });

    case 'ADD_QUESTION_TO_STEP':
      var stepsWithQuestion = state.createdCourse.steps;
      stepsWithQuestion[payload.id].question = JSON.parse(JSON.stringify(basicQuestion));
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: stepsWithQuestion
        })
      });

    case 'EDIT_STEP_QUESTION':
      var stepsWithAlteredQuestion = state.createdCourse.steps;
      stepsWithAlteredQuestion[payload.id].question[payload.name] = payload.value;
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: stepsWithAlteredQuestion
        })
      });

    case 'ADD_CHECKBOX_QUESTION_TO_STEP':
      var stepsWithCheckboxQuestion = state.createdCourse.steps;
      stepsWithCheckboxQuestion[payload.id].question = JSON.parse(JSON.stringify(checkboxQuestion));
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: stepsWithCheckboxQuestion
        })
      });

    case 'MARK_PROPER_CHECKBOX_ANSWER':
      var stepsWithWrongCheckboxAnswer = state.createdCourse.steps;
      stepsWithWrongCheckboxAnswer[payload.id].question.answers.forEach(function (answer, i) {
        return stepsWithWrongCheckboxAnswer[payload.id].question.answers[i].valid = false;
      });
      stepsWithWrongCheckboxAnswer[payload.id].question.answers[payload.optionId].valid = true;
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: stepsWithWrongCheckboxAnswer
        })
      });

    case 'ALTER_CHECKBOX_ANSWER':
      var stepsWithNotAlteredCheckboxAnswer = state.createdCourse.steps;
      stepsWithNotAlteredCheckboxAnswer[payload.id].question.answers[payload.optionId].answer = payload.value;
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: stepsWithNotAlteredCheckboxAnswer
        })
      });

    case 'ALTER_CHECKBOX_QUESTION':
      var stepsWithNotAlteredCheckboxQuestion = state.createdCourse.steps;
      stepsWithNotAlteredCheckboxQuestion[payload.id].question.question = payload.value;
      return _objectSpread({}, state, {
        createdCourse: _objectSpread({}, state.createdCourse, {
          steps: stepsWithNotAlteredCheckboxQuestion
        })
      });

    default:
      console.log('THIS ACTION IS NOT SPECIFIED.');
      return state;
  }
};

exports.reducer = reducer;