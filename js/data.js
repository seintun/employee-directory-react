employeeService = (function() {
  const findById = function(id) {
    const deferred = $.Deferred();
    const l = employees.length;
    let employee = null;
    for (let i = 0; i < l; i++) {
      if (employee[i].id === id) {
        employee = employee[i];
        break;
      }
      deferred.resolve(employee);
      return deferred.promise();
    }
  };
  return {
    findById: findById
  };
}());
