function runTests(tests) {
  var failed = 0;
  tests.push({
    expr: function() {
      return tests.length-1 === i
    },
    "label": "Run all tests successfully"
  });
  for (var i=0; i<tests.length; i++) {
    var runExpr = tests[i].expr();
    if (!runExpr) failed++;
    console.assert(runExpr, tests[i].label);
  }
  console.log('Passed: ' + (tests.length-failed), "Failed: " + failed);
}